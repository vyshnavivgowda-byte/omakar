import os
import re

page_file = r"c:\Users\ADMIN\Desktop\omkar-website\src\app\page.tsx"
out_dir = r"c:\Users\ADMIN\Desktop\omkar-website\src\components"
os.makedirs(out_dir, exist_ok=True)

with open(page_file, "r", encoding="utf-8") as f:
    text = f.read()

def get_section(name, next_name=None):
    start_str = f"{{/* {name} */}}"
    start_idx = text.find(start_str)
    if start_idx == -1:
        print(f"Failed to find {start_str}")
        return ""
    if next_name:
        end_str = f"{{/* {next_name} */}}"
        end_idx = text.find(end_str, start_idx)
    else:
        end_str = "</main>"
        end_idx = text.find(end_str, start_idx)
        
    if end_idx == -1:
        print(f"Failed to find end {end_str}")
        return ""
    return text[start_idx:end_idx].strip()

def get_array(var_name):
    pattern = rf"(const {var_name} = \[.*?\];)"
    match = re.search(pattern, text, flags=re.DOTALL)
    if match:
        return match.group(1)
    print(f"Failed to find array {var_name}")
    return ""

sections = [
    {
        "name": "Header",
        "comment": "Header",
        "next": "Hero",
        "imports": 'import Image from "next/image";\nimport { ArrowUpRight, Menu } from "lucide-react";\n',
        "data": ""
    },
    {
        "name": "Hero",
        "comment": "Hero",
        "next": "Stats",
        "imports": 'import { Sparkles, ArrowRight, Play } from "lucide-react";\n',
        "data": ""
    },
    {
        "name": "Stats",
        "comment": "Stats",
        "next": "About",
        "imports": "",
        "data": ""
    },
    {
        "name": "About",
        "comment": "About",
        "next": "Our Services — Across the Cities",
        "imports": 'import { ArrowUpRight, TrendingUp, Maximize } from "lucide-react";\n',
        "data": ""
    },
    {
        "name": "Cities",
        "comment": "Our Services — Across the Cities",
        "next": "Infrastructure / Videos",
        "imports": 'import { MapPin, ArrowUpRight } from "lucide-react";\n',
        "data": get_array("cities")
    },
    {
        "name": "Infrastructure",
        "comment": "Infrastructure / Videos",
        "next": "Expertise",
        "imports": 'import { Factory, Play, ArrowUpRight, CheckCircle2 } from "lucide-react";\n',
        "data": get_array("machines")
    },
    {
        "name": "Expertise",
        "comment": "Expertise",
        "next": "ISO Certification",
        "imports": 'import { ArrowUpRight, Layout, Image as ImageIcon, Briefcase, Layers, PenTool, CheckCircle2, Maximize } from "lucide-react";\n',
        "data": get_array("expertiseList")
    },
    {
        "name": "IsoCertification",
        "comment": "ISO Certification",
        "next": "Our Honorable Brands Signages",
        "imports": 'import Image from "next/image";\nimport { ShieldCheck } from "lucide-react";\n',
        "data": get_array("isoCertificates")
    },
    {
        "name": "BrandSignages",
        "comment": "Our Honorable Brands Signages",
        "next": "Brands That Trust Us — merged logo wall",
        "imports": 'import Image from "next/image";\nimport { Images, ArrowUpRight } from "lucide-react";\n',
        "data": get_array("signageGallery")
    },
    {
        "name": "TrustedBrands",
        "comment": "Brands That Trust Us — merged logo wall",
        "next": "Process",
        "imports": 'import Image from "next/image";\nimport { Building2 } from "lucide-react";\n',
        "data": get_array("trustedBrandLogos")
    },
    {
        "name": "Process",
        "comment": "Process",
        "next": "CTA / Footer",
        "imports": 'import { ArrowDown } from "lucide-react";\n',
        "data": get_array("processList")
    },
    {
        "name": "Footer",
        "comment": "CTA / Footer",
        "next": None,
        "imports": 'import { Sparkles, ArrowUpRight } from "lucide-react";\n',
        "data": ""
    }
]

for sec in sections:
    html = get_section(sec["comment"], sec["next"])
    data_str = sec.get("data", "")
    comp = f"{sec['imports']}\n{data_str}\n\nexport default function {sec['name']}() {{\n  return (\n    <>\n      {html}\n    </>\n  );\n}}\n"
    with open(os.path.join(out_dir, f"{sec['name']}.tsx"), "w", encoding="utf-8") as f:
        f.write(comp)

imports = "\n".join([f'import {sec["name"]} from "../components/{sec["name"]}";' for sec in sections])
tags = "\n      ".join([f'<{sec["name"]} />' for sec in sections])

new_page = f'''{imports}

export default function Home() {{
  return (
    <main className="min-h-screen bg-[#f4f1ea] text-[#101714] font-sans selection:bg-teal-500 selection:text-white overflow-x-hidden">
      {tags}
    </main>
  );
}}
'''
with open(page_file, "w", encoding="utf-8") as f:
    f.write(new_page)
print("Done")
