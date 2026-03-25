import os
import subprocess
import json

SOURCE_DIR = "/root/proyectos/dlv-fence-houston/public/portfolio"
INVENTORY_PATH = "/root/proyectos/dlv-fence-houston/src/data/inventory.json"

def optimize_images():
    with open(INVENTORY_PATH, 'r') as f:
        inventory = json.load(f)

    for item in inventory:
        filename = item['archivo']
        if filename.endswith('.mp4'):
            continue
        
        filepath = os.path.join(SOURCE_DIR, filename)
        if not os.path.exists(filepath):
            print(f"File not found: {filepath}")
            continue

        webp_filename = os.path.splitext(filename)[0] + ".webp"
        webp_path = os.path.join(SOURCE_DIR, webp_filename)

        print(f"Optimizing {filename} -> {webp_filename}...")
        
        # Resize to max 1200px width and convert to WebP with quality 80
        # -resize 1200x\> means only resize if width > 1200
        cmd = [
            "convert", filepath,
            "-resize", "1200x>",
            "-quality", "80",
            webp_path
        ]
        
        try:
            subprocess.run(cmd, check=True)
            # Update inventory
            item['archivo'] = webp_filename
            # Remove old jpg
            os.remove(filepath)
        except subprocess.CalledProcessError as e:
            print(f"Error optimizing {filename}: {e}")

    # Save updated inventory
    with open(INVENTORY_PATH, 'w') as f:
        json.dump(inventory, f, indent=2)

if __name__ == "__main__":
    optimize_images()
