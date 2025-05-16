import { Inter, Lusitana, Geist} from "next/font/google";

export const lusitana = Lusitana({
    subsets: ["latin"],
    weight: ["400", "700"]
});

export const geist = Geist({
  subsets: ["latin"],
  weight: "700"
});
export const inter = Inter({ subsets: ["latin"] });
