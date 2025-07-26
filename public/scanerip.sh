#!/bin/bash

# Escáner de red bash compatible con Windows (Git Bash/Cygwin/WSL)
# Versión 3.1 - Detección mejorada para Windows

# Configuración
intervalo=300
result_dir="$HOME/Desktop"
archivo_resultado="$result_dir/resultado_ips.txt"
ping_timeout=500  # Timeout más largo para Windows

# Crear directorio para resultados
mkdir -p "$result_dir"

# Función para detectar el sistema
get_os() {
    case "$(uname -s)" in
        Linux*)     echo "Linux";;
        Darwin*)    echo "Mac";;
        CYGWIN*)    echo "Cygwin";;
        MINGW*)    echo "GitBash";;
        *)          echo "Unknown"
    esac
}

# Banner mejorado
show_banner() {
    clear
    echo -e "\e[34m"
    echo "    ███████╗ ██████╗ █████╗ ███╗   ██╗███████╗██████╗ "
    echo "    ██╔════╝██╔════╝██╔══██╗████╗  ██║██╔════╝██╔══██╗"
    echo "    ███████╗██║     ███████║██╔██╗ ██║█████╗  ██████╔╝"
    echo "    ╚════██║██║     ██╔══██║██║╚██╗██║██╔══╝  ██╔══██╗"
    echo "    ███████║╚██████╗██║  ██║██║ ╚████║███████╗██║  ██║"
    echo "    ╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝"
    echo -e "\e[0m"
    echo "    Modo Windows - Bash (Git Bash/Cygwin/WSL)"
    echo "    -----------------------------------------"
}

# Detectar red en Windows
detect_network_win() {
    local ip_mask=$(ipconfig | grep -i "IPv4" | head -1 | awk '{print $NF}')
    local ip=$(echo "$ip_mask" | cut -d '/' -f1)
    local mask=$(ipconfig | grep -i "Subnet" | head -1 | awk '{print $NF}')
    
    if [ -z "$ip" ]; then
        echo ""
        return
    fi

    # Convertir máscara a formato CIDR
    case "$mask" in
        255.255.255.0) cidr=24;;
        255.255.0.0)   cidr=16;;
        255.0.0.0)     cidr=8;;
        *)             cidr=24;;  # Por defecto /24
    esac

    echo "${ip%.*}.0/$cidr"
}

# Escaneo mejorado para Windows
scan_network() {
    local network="$1"
    local base_ip="${network%.*}"
    local ocupadas=()
    local libres=()

    echo -e "\n[*] Escaneando red: $network"
    echo "[*] Usando método adaptado para Windows"

    # Usamos ARP para mayor precisión en Windows
    arp -d > /dev/null 2>&1  # Limpiar cache ARP

    for i in {1..254}; do
        ip="$base_ip.$i"
        
        # Ping con timeout ajustado
        if ping -n 1 -w "$ping_timeout" "$ip" > /dev/null 2>&1; then
            # Verificar en tabla ARP
            if arp -a | grep -q " $ip "; then
                echo -e "\e[32m$ip: Ocupada (respondió a ping)\e[0m"
                ocupadas+=("$ip")
            else
                echo -e "\e[33m$ip: Puede estar filtrada (ping bloqueado)\e[0m"
            fi
        else
            echo -e "\e[31m$ip: Libre\e[0m"
            libres+=("$ip")
        fi
    done

    # Guardar resultados
    {
        echo "Último escaneo: $(date)"
        echo "Red escaneada: $network"
        echo "----------------------------------------"
        echo "IPs ocupadas (${#ocupadas[@]}):"
        printf "%s\n" "${ocupadas[@]}"
        echo -e "\nIPs libres (${#libres[@]}):"
        printf "%s\n" "${libres[@]}"
    } > "$archivo_resultado"

    echo -e "\nResultados guardados en: \e[1m$archivo_resultado\e[0m"
}

# Main
show_banner

# Detectar SO
os_type=$(get_os)
echo -e "Sistema detectado: \e[1m$os_type\e[0m"

# Obtener red
if [ $# -gt 0 ]; then
    network="$1"
else
    if [ "$os_type" = "GitBash" ] || [ "$os_type" = "Cygwin" ]; then
        network=$(detect_network_win)
    else
        network=$(ip route | awk '/src/ {print $1}' | head -1)
    fi

    if [ -z "$network" ]; then
        echo -e "\nNo se pudo detectar la red automáticamente."
        read -p "Ingrese la red (ej. 192.168.10.0/24): " network
    fi
fi

# Validar red
if [[ ! "$network" =~ ^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/[0-9]{1,2}$ ]]; then
    echo "Formato de red incorrecto. Usando 192.168.10.0/24"
    network="192.168.10.0/24"
fi

# Bucle principal
while true; do
    show_banner
    echo -e "Escaneando red: \e[1m$network\e[0m"
    echo -e "Sistema: \e[1m$os_type\e[0m"
    echo -e "Timeout ping: \e[1m${ping_timeout}ms\e[0m"
    echo -e "\nPresione \e[1mCtrl+C\e[0m para detener\n"
    
    scan_network "${network%/*}"
    
    echo -e "\nPróximo escaneo en $((intervalo/60)) minutos..."
    sleep "$intervalo"
done