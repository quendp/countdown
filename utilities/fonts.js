import localFont from "@next/font/local";

export const poppins = localFont({
  src: [
    {
      path: "../public/fonts/Poppins/Poppins-Thin.ttf",
      weight: "100",
    },
    {
      path: "../public/fonts/Poppins/Poppins-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../public/fonts/Poppins/Poppins-Light.ttf",
      weight: "300",
    },
    {
      path: "../public/fonts/Poppins/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Poppins/Poppins-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/Poppins/Poppins-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/Poppins/Poppins-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/Poppins/Poppins-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "../public/fonts/Poppins/Poppins-Black.ttf",
      weight: "900",
    },
  ],
  variable: "--font-poppins",
});

export const rozhaOne = localFont({
  src: [
    {
      path: "../public/fonts/Rozha_One/RozhaOne-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-rhoza-one",
});
