import json
import os

INVENTORY_PATH = "/root/proyectos/dlv-fence-houston/src/data/inventory.json"
PORTFOLIO_DIR = "/root/proyectos/dlv-fence-houston/public/portfolio"

def cleanup_inventory():
    with open(INVENTORY_PATH, 'r') as f:
        inventory = json.load(f)

    valid_inventory = []
    removed_count = 0

    for item in inventory:
        file_path = os.path.join(PORTFOLIO_DIR, item['archivo'])
        if os.path.exists(file_path):
            valid_inventory.append(item)
        else:
            print(f"Removing missing asset: {item['archivo']}")
            removed_count += 1

    with open(INVENTORY_PATH, 'w') as f:
        json.dump(valid_inventory, f, indent=2)
    
    print(f"Cleanup complete. Removed {removed_count} missing assets.")

if __name__ == "__main__":
    cleanup_inventory()
