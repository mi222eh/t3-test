"use client";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import Input from "./Input";
import { useMemo } from "react";
import Image from "next/image";

interface SearchFormData {
  alkalinity: string;
  arsenic: string;
  ammonium: string;
  lead: string;
  fluoride: string;
  phosphate: string;
  color: string;
  iron: string;
  cadmium: string;
  calcium: string;
  potassium: string;
  chemicalOxygenDemand: string;
  chloride: string;
  conductivity: string;
  copper: string;
  magnesium: string;
  manganese: string;
  sodium: string;
  nitrate: string;
  nitrite: string;
  pH: string;
  sulfate: string;
  totalHardnessCalculated: string;
}
export default function SearchForm() {
  const form = useForm<SearchFormData>({
    defaultValues: {
      alkalinity: "",
      arsenic: "",
      ammonium: "",
      lead: "",
      fluoride: "",
      phosphate: "",
      color: "",
      iron: "",
      cadmium: "",
      calcium: "",
      potassium: "",
      chemicalOxygenDemand: "",
      chloride: "",
      conductivity: "",
      copper: "",
      magnesium: "",
      manganese: "",
      sodium: "",
      nitrate: "",
      nitrite: "",
      pH: "",
      sulfate: "",
      totalHardnessCalculated: "",
    },
    mode: "onChange",
  });

  const values = form.watch();

  const relatedProducts = useMemo(() => {
    console.log(values);
    return products;
    return products.filter((product) => {
      return product.filters.some((filter) => {
        const value = values[filter];
        if (value === undefined) {
          return false;
        }
        return Number(value) > chemicalLimits[filter];
      });
    });
  }, [values]);

  return (
    <form>
      <DevTool control={form.control} />

      <div className="grid grid-cols-7">
        <label>
          Alkalinitet
          <Input type="text" {...form.register("alkalinity")} />
        </label>
        <label>
          Arsenik
          <Input type="text" {...form.register("arsenic")} />
        </label>
        <label>
          Ammonium
          <Input type="text" {...form.register("ammonium")} />
        </label>
        <label>
          Bly
          <Input type="text" {...form.register("lead")} />
        </label>
        <label>
          Fluorid
          <Input type="text" {...form.register("fluoride")} />
        </label>
        <label>
          Fosfat
          <Input type="text" {...form.register("phosphate")} />
        </label>
        <label>
          Färg
          <Input type="text" {...form.register("color")} />
        </label>
        <label>
          Järn
          <Input type="text" {...form.register("iron")} />
        </label>
        <label>
          Kadmium
          <Input type="text" {...form.register("cadmium")} />
        </label>
        <label>
          Kalcium
          <Input type="text" {...form.register("calcium")} />
        </label>
        <label>
          Kalium
          <Input type="text" {...form.register("potassium")} />
        </label>
        <label>
          Kemisk syreförbrukning
          <Input type="text" {...form.register("chemicalOxygenDemand")} />
        </label>
        <label>
          Klorid
          <Input type="text" {...form.register("chloride")} />
        </label>
        <label>
          Konduktivitet
          <Input type="text" {...form.register("conductivity")} />
        </label>
        <label>
          Koppar
          <Input type="text" {...form.register("copper")} />
        </label>
        <label>
          Magnesium
          <Input type="text" {...form.register("magnesium")} />
        </label>
        <label>
          Mangan
          <Input type="text" {...form.register("manganese")} />
        </label>
        <label>
          Natrium
          <Input type="text" {...form.register("sodium")} />
        </label>
        <label>
          Nitrat
          <Input type="text" {...form.register("nitrate")} />
        </label>
        <label>
          Nitrit
          <Input type="text" {...form.register("nitrite")} />
        </label>
        <label>
          pH
          <Input type="text" {...form.register("pH")} />
        </label>
        <label>
          Sulfat
          <Input type="text" {...form.register("sulfate")} />
        </label>
        <label>
          Total hårdhet (beräknad)
          <Input type="text" {...form.register("totalHardnessCalculated")} />
        </label>
        {/* <label>
          Turbiditet
          <Input type="text" {...form.register("turbidity")} />
        </label>
        <label>
          Uran
          <Input type="text" {...form.register("uranium")} />
        </label>
        <label>
          Aluminium
          <Input type="text" {...form.register("aluminum")} />
        </label>
        <label>
          Antimon
          <Input type="text" {...form.register("antimony")} />
        </label>
        <label>
          Bekämpningsmedel – enskilda
          <Input type="text" {...form.register("pesticidesIndividual")} />
        </label>
        <label>
          Bekämpningsmedel specifika
          <Input type="text" {...form.register("specificPesticides")} />
        </label>
        <label>
          Bekämpningsmedel – totalt
          <Input type="text" {...form.register("pesticidesTotal")} />
        </label>
        <label>
          Bor
          <Input type="text" {...form.register("boron")} />
        </label>
        <label>
          Cyanid
          <Input type="text" {...form.register("cyanide")} />
        </label>
        <label>
          Cyanotoxiner
          <Input type="text" {...form.register("cyanotoxins")} />
        </label>
        <label>
          Färg
          <Input type="text" {...form.register("color")} />
        </label>
        <label>
          Klor, total aktiv
          <Input type="text" {...form.register("chlorineTotalActive")} />
        </label>
        <label>
          Krom
          <Input type="text" {...form.register("chromium")} />
        </label>
        <label>
          Kvicksilver
          <Input type="text" {...form.register("mercury")} />
        </label>
        <label>
          Lukt
          <Input type="text" {...form.register("odor")} />
        </label>
        <label>
          Nickel
          <Input type="text" {...form.register("nickel")} />
        </label>
        <label>
          PAH
          <Input type="text" {...form.register("PAH")} />
        </label>
        <label>
          PFAS
          <Input type="text" {...form.register("PFAS")} />
        </label>
        <label>
          Radon
          <Input type="text" {...form.register("radon")} />
        </label>
        <label>
          Selen
          <Input type="text" {...form.register("selenium")} />
        </label>
        <label>
          Smak
          <Input type="text" {...form.register("taste")} />
        </label> */}
      </div>
      <div className="flex flex-shrink flex-grow-0 flex-wrap gap-4 p-2">
        {relatedProducts.map((product) => {
          return (
            <div className="card card-compact card-bordered p-2">
              <h2 className="card-title">{product.name}</h2>
              <div className="card-body">
                <p>{product.description}</p>
                <p>{product.price}kr</p>
                <img alt={product.name} src={product.image} width="100px" />
              </div>
            </div>
          );
        })}
      </div>
    </form>
  );
}

const chemicalLimits: Record<keyof SearchFormData, number> = {
  iron: 0.2,
  manganese: 0.05,
  sulfate: 0.05,
  pH: 8.5,
  alkalinity: 0.2,
  arsenic: 0.01,
  ammonium: 0.5,
  lead: 0.01,
  fluoride: 1.5,
  phosphate: 0.5,
  color: 20,
  cadmium: 0.003,
  calcium: 200,
  potassium: 12,
  chemicalOxygenDemand: 5,
  chloride: 250,
  conductivity: 250,
  copper: 2,
  magnesium: 50,
  sodium: 200,
  nitrate: 50,
  nitrite: 0.5,
  totalHardnessCalculated: 200,
};

interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
  filters: Array<keyof SearchFormData>;
}

const products: Product[] = [
  {
    name: "Ferrolite",
    description:
      "Ferrolite är en järnfiltermassa som används för att ta bort järn och mangan från vatten. Ferrolite är en naturlig zeolit som är belagd med mangandioxid. Ferrolite är ett effektivt filtermaterial som kan användas i både små och stora filteranläggningar.",
    price: 100,
    image: "https://picsum.photos/200",
    filters: ["iron", "manganese"],
  },
  {
    name: "GÖINGEFILTER KOMBI",
    description:
      "Göingefilter Kombi är ett filtermaterial som används för att ta bort järn, mangan och svavelväte från vatten. Göingefilter Kombi är en naturlig zeolit som är belagd med mangandioxid. Göingefilter Kombi är ett effektivt filtermaterial som kan användas i både små och stora filteranläggningar.",
    price: 200,
    image: "https://picsum.photos/100",
    filters: ["iron", "manganese", "sulfate"],
  },
];
