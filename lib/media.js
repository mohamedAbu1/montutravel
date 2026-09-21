const localImages = {
  default: "/HomePageImage/pexels-adventistasia-25662334.webp",
  category: [
    "/Nile_Cruise/pexels-sahilcaptures-35645491.webp",
    "/Luxor/asdkasdww.webp",
    "/HomePageImage/pexels-ahad-hasan-1816309676-34248486.webp",
  ],
  destination: {
    cairo: "/Cairo/pexels-alexazabache-3290075.webp",
    luxor: "/Luxor/pexels-oualid-soussi-2150533856-35050672.webp",
    aswan: "/Aswan/pexels-tizzy-35549851.webp",
    hurghada: "/Hurghada/pexels-ozgomz-7566888.webp",
    siwa: "/Siwa/pexels-ast4rk-33661271.webp",
    fayoum: "/Fayoum/crystal-bP2UOzW1E6s-unsplash.webp",
    marsa: "/Marsa_Alam/pexels-milan-wouters-1903731614-29116365.webp",
    alexandria: "/Alexandria/pexels-reem-mohamed-462545516-15642279.webp",
    sharm: "/Sharm_El_Sheikh/pexels-ast4rk-33661271.webp",
  },
};

const normalizeText = (value) => (typeof value === "string" ? value.toLowerCase() : "");
const getLabelText = (label) => {
  if (!label) return "";
  if (typeof label === "string") return label;
  return Object.values(label).filter(Boolean).join(" ");
};

export function resolveTravelImage(source, { kind = "trip", label = "", index = 0 } = {}) {
  const value = typeof source === "string" ? source.trim() : "";
  if (value.startsWith("/")) return value;
  if (value.startsWith("https://") && !value.includes("onetimelifetravel.com")) return value;
  const text = `${normalizeText(value)} ${normalizeText(getLabelText(label))}`;

  if (kind === "destination") {
    const match = Object.entries(localImages.destination).find(([token]) => text.includes(token));
    if (match) return match[1];
  }
  if (kind === "category") {
    const hash = [...text].reduce((total, char) => total + char.charCodeAt(0), 0);
    return localImages.category[(Math.abs(hash) + index) % localImages.category.length];
  }
  if (text.includes("nile") || text.includes("aswan") || text.includes("edfu")) return "/Nile_Cruise/pexels-sahilcaptures-35645491.webp";
  if (text.includes("luxor") || text.includes("temple") || text.includes("dendera")) return "/Luxor/pexels-oualid-soussi-2150533856-35050672.webp";
  if (text.includes("hurghada") || text.includes("red sea")) return "/Hurghada/pexels-ozgomz-7566888.webp";
  if (text.includes("cairo") || text.includes("pyramid")) return "/Cairo/pexels-alexazabache-3290075.webp";
  if (text.includes("desert") || text.includes("fayoum") || text.includes("siwa")) return "/Siwa/pexels-ast4rk-33661271.webp";
  return localImages.default;
}

export function normalizeImageList(value, options = {}) {
  let images = value;
  if (typeof images === "string") {
    try { images = JSON.parse(images); } catch { images = []; }
  }
  if (!Array.isArray(images)) images = [];
  if (images.length === 0) return [0, 1].map((index) => resolveTravelImage("", { ...options, index }));
  return images.map((image, index) => resolveTravelImage(typeof image === "object" ? image?.url : image, { ...options, index }));
}

export function normalizeCategoryRecord(record) {
  return { ...record, images: normalizeImageList(record?.images, { kind: "category", label: record?.name }) };
}

export function normalizeCityRecord(record) {
  return { ...record, images: normalizeImageList(record?.images, { kind: "destination", label: record?.name }) };
}

export function normalizeTripRecord(record) {
  return {
    ...record,
    cover_image: resolveTravelImage(record?.cover_image, { label: record?.title }),
    gallery_images: normalizeImageList(record?.gallery_images, { label: record?.title }),
  };
}
