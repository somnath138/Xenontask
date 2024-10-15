#!/bin/bash

# List running services
service_list() {
    echo "Listing active services..."
    systemctl list-units --type=service --state=active
}

# Start a service
service_start() {
    if [[ -z "$1" ]]; then
        echo "Please specify a service to start."
        exit 1
    fi
    echo "Starting service: $1"
    sudo systemctl start "$1"
    echo "Service $1 started."
}

# Stop a service
service_stop() {
    if [[ -z "$1" ]]; then
        echo "Please specify a service to stop."
        exit 1
    fi
    echo "Stopping service: $1"
    sudo systemctl stop "$1"
    echo "Service $1 stopped."
}

# Main service handler
service() {
    case $1 in
        list)
            service_list
            ;;
        start)
            service_start "$2"
            ;;
        stop)
            service_stop "$2"
            ;;
        *)
            echo "Invalid service command."
            ;;
    esac
}

