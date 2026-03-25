import os
import subprocess
import json

SOURCE_DIR = "/root/proyectos/dlv-fence-houston/public/portfolio"
INVENTORY_PATH = "/root/proyectos/dlv-fence-houston/src/data/inventory.json"

NUEVOS_ARCHIVOS = [
    {
        "archivo": "gate_stone_pillars_01.jpg",
        "categoria": "Gate",
        "material": "Wrought Iron / Hierro Forjado",
        "estilo": "Residencial, columnas de piedra",
        "notas": "Portón doble de hierro negro con arco invertido, instalado entre columnas de piedra natural.",
        "ubicacion": "Houston, TX"
    },
    {
        "archivo": "gate_ornamental_bronze_01.jpg",
        "categoria": "Gate",
        "material": "Wrought Iron / Bronze Finish",
        "estilo": "Residencial, clásico premium",
        "notas": "Portón doble ornamentado con acabado en tono bronce/cobre, columnas blancas y faroles clásicos.",
        "ubicacion": "Houston, TX"
    },
    {
        "archivo": "gate_monogram_r_01.jpg",
        "categoria": "Gate",
        "material": "Wrought Iron / Hierro Forjado",
        "estilo": "Residencial, personalizado",
        "notas": "Portón con monograma central 'R' en corte láser, diseño de arco clásico.",
        "ubicacion": "Houston, TX"
    },
    {
        "archivo": "gate_studs_custom_01.jpg",
        "categoria": "Gate",
        "material": "Wrought Iron / Custom Studs",
        "estilo": "Finca/Rancho, rústico industrial",
        "notas": "Portón con aplicaciones de estoperoles decorativos y diseño de arco doble.",
        "ubicacion": "Houston, TX"
    },
    {
        "archivo": "gate_wood_iron_frame_01.jpg",
        "categoria": "Gate",
        "material": "Wood & Iron / Madera y Hierro",
        "estilo": "Residencial, privacidad total",
        "notas": "Portón doble de madera de cedro con marco de hierro negro, alta privacidad.",
        "ubicacion": "Houston, TX"
    },
    {
        "archivo": "gate_wood_sliding_modern_01.jpg",
        "categoria": "Gate",
        "material": "Wood & Iron / Madera y Hierro",
        "estilo": "Residencial, moderno deslizante",
        "notas": "Portón deslizante automatizado de paneles de madera horizontales y marco gris.",
        "ubicacion": "Houston, TX"
    },
    {
        "archivo": "railing_outdoor_modern_01.jpg",
        "categoria": "Railing",
        "material": "Wrought Iron / Hierro Forjado",
        "estilo": "Residencial, moderno horizontal",
        "notas": "Pasamanos exterior de líneas horizontales negras para deck de madera.",
        "ubicacion": "Houston, TX"
    },
    {
        "archivo": "railing_indoor_loft_01.jpg",
        "categoria": "Railing",
        "material": "Wrought Iron / Hierro Forjado",
        "estilo": "Interior, industrial moderno",
        "notas": "Barandal interior para loft con diseño de perfiles rectangulares negros.",
        "ubicacion": "Houston, TX"
    },
    {
        "archivo": "railing_indoor_stairs_01.jpg",
        "categoria": "Railing",
        "material": "Wrought Iron / Hierro Forjado",
        "estilo": "Interior, moderno minimalista",
        "notas": "Barandal de escalera interior con líneas horizontales, estilo limpio.",
        "ubicacion": "Houston, TX"
    },
    {
        "archivo": "gate_monogram_z_luxury_01.jpg",
        "categoria": "Gate",
        "material": "Wrought Iron / Luxury Custom",
        "estilo": "Residencial, gran lujo",
        "notas": "Portón masivo con monograma central 'Z', detalles en plata/cromo y ornamentación superior.",
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
