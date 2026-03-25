import os
import subprocess

ICONS_DIR = "/root/proyectos/dlv-fence-houston/public/icons"

def process_icons():
    mapping = {
        "iron-raw.jpg": "iron.webp",
        "automated-raw.jpg": "automated.webp",
        "sheet-metal-raw.jpg": "sheet-metal.webp",
        "aluminum-raw.jpg": "aluminum.webp"
    }

    for src, dest in mapping.items():
        src_path = os.path.join(ICONS_DIR, src)
        dest_path = os.path.join(ICONS_DIR, dest)
        
        if not os.path.exists(src_path):
            print(f"Skipping {src}, not found.")
            continue

        print(f"Processing {src} -> {dest}...")
        
        # Resize to 256x256 (icons) and convert to WebP
        cmd = [
            "convert", src_path,
            "-resize", "256x256^",
            "-gravity", "center",
            "-extent", "256x256",
            "-quality", "90",
            dest_path
        ]
        
        try:
            subprocess.run(cmd, check=True)
            # Remove the raw file after processing
            os.remove(src_path)
            # Remove the old SVG if it exists (since we're switching to webp icons)
            old_svg = os.path.splitext(dest_path)[0] + ".svg"
            if os.path.exists(old_svg):
                os.remove(old_svg)
        except subprocess.CalledProcessError as e:
            print(f"Error processing {src}: {e}")

if __name__ == "__main__":
    process_icons()
