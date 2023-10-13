import * as prismic from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { PrismicRichText } from "@/components/PrismicRichText";

/**
 * @typedef {import("@prismicio/client").Content.CalloutSlice} CalloutSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CalloutSlice>} CalloutProps
 * @param {CalloutProps}
 *
 */
const Callout = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage field={slice.primary.im3} />
      <PrismicRichText field={item.text} />
      <>
        {item.location.latitude}, {item.location.longitude}
      </>
      <>{item.num}</>
      <PrismicNextImage field={item.imges} />
      Placeholder component for callout (variation: {slice.variation}) Slices
    </section>
  );
};

export default Callout;
