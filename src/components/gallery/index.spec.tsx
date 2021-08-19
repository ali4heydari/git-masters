import { render } from "@test";

import data from "@public/meta.json";
import { Gallery } from "./index";

describe("Gallery component testing with testing-library", () => {
  it("renders without crashing", () => {
    const component = render(<Gallery />);

    expect(component).toBeTruthy();
  });

  it("cards length must be equal to the length of the meta data ", () => {
    const { getAllByTestId } = render(<Gallery />);

    const cardContainer = getAllByTestId("container");
    expect(cardContainer).toHaveLength(data.plugins.length);
  });
});
