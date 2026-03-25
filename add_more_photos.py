import os
import subprocess
import json

SOURCE_DIR = "/root/proyectos/dlv-fence-houston/public/portfolio"
INVENTORY_PATH = "/root/proyectos/dlv-fence-houston/src/data/inventory.json"

NUEVOS_ARCHIVOS = [
    {
        "archivo": "gate_texas_star_slider_01.jpg",
        "categoria": "Gate",
        "material": "Wrought Iron / Hierro Forjado",
        "estilo": "Residencial, logo Texas Star",
        "notas": "Portón deslizante masivo de hierro negro con el escudo de la estrella de Texas en el centro.",
        "ubicacion": "Houston, TX"
    },
    {
        "archivo": "fence_stepped_iron_01.jpg",
        "categoria": "Fence",
        "material": "Wrought Iron / Hierro Forjado",
        "estilo": "Residencial, terreno inclinado",
        "notas": "Barda de hierro negro instalada de forma escalonada (stepped) para adaptarse a la pendiente del terreno.",
        "ubicacion": "Houston, TX"
    },
    {
        "archivo": "gate_wood_arched_monogram_01.jpg",
        "categoria": "Gate",
        "material": "Wood & Iron / Madera y Hierro",
        "estilo": "Residencial, arco ornamentado",
        "notas": "Portón de madera de cedro con marco de hierro forjado, arco superior con espirales y monograma central.",
        "ubicacion": "Houston, TX"
    },
    {
        "archivo": "gate_mishad_ranch_sunset_01.jpg",
        "categoria": "Gate",
        "material": "Wrought Iron / Custom Art",
        "estilo": "Rancho, paisaje atardecer",
        "notas": "Gran arco de entrada 'MISHAD RANCH' con portón de hierro forjado bajo un cielo de atardecer.",
        "ubicacion": "Houston, TX"
    },
    {
        "archivo": "fence_spear_top_residential_01.jpg",
        "categoria": "Fence",
        "material": "Wrought Iron / Hierro Forjado",
        "estilo": "Residencial, alta seguridad",
        "notas": "Cerca perimetral de hierro negro con puntas de lanza (spear tops) rodeando una propiedad con árboles.",
        "ubicacion": "Houston, TX"
    }
]

def process_and_add():
    with open(INVENTORY_PATH, 'r') as f:
        inventory = json.load(f)

    for item in NUEVOS_ARCHIVOS:
        filename = item['archivo']
        src_path = os.path.join(SOURCE_DIR, filename)
        
        if not os.path.exists(src_path):
            print(f"Skipping {filename}, not found.")
            continue

        webp_filename = os.path.splitext(filename)[0] + ".webp"
        dest_path = os.path.join(SOURCE_DIR, webp_filename)

        print(f"Optimizing {filename} -> {webp_filename}...")
        
        # Optimize for web
        cmd = [
            "convert", src_path,
            "-resize", "1200x>",
            "-quality", "80",
            dest_path
        ]
        
        try:
            subprocess.run(cmd, check=True)
            item['archivo'] = webp_filename
            inventory.append(item)
            os.remove(src_path)
        except Exception as e:
            print(f"Error processing {filename}: {e}")

    with open(INVENTORY_PATH, 'w') as f:
        json.dump(inventory, f, indent=2)

if __name__ == "__main__":
    process_and_add()
