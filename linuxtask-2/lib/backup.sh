#!/bin/bash

# Backup system files
backup_system() {
    if [[ -z "$1" ]]; then
        echo "Please specify a path to backup."
        exit 1
    fi
    if [ ! -d "$1" ]; then
        echo "Invalid path: $1"
        exit 1
    fi
    BACKUP_DIR="/backup$(date +%Y%m%d_%H%M%S)"
    echo "Backing up $1 to $BACKUP_DIR"
    sudo mkdir -p "$BACKUP_DIR"
    sudo rsync -a --progress "$1" "$BACKUP_DIR"
    echo "Backup completed for $1"
}

