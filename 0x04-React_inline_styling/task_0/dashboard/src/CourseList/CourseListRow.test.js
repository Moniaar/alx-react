import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("CourseListRow component tests", () => {
  it("renders one cell with colspan = 2 when textSecondCell is null and isHeader is true", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" />);
    expect(wrapper.find("th").props().colSpan).toEqual(2);
    expect(wrapper.find("th").text()).toEqual("Header");
    expect(wrapper.find("tr").props().style).toEqual({ backgroundColor: "#deb5b545" });
  });

  it("renders two cells when textSecondCell is not null and isHeader is true", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header1" textSecondCell="Header2" />);
    const ths = wrapper.find("th");
    expect(ths).toHaveLength(2);
    expect(ths.at(0).text()).toEqual("Header1");
    expect(ths.at(1).text()).toEqual("Header2");
    expect(wrapper.find("tr").props().style).toEqual({ backgroundColor: "#deb5b545" });
  });

  it("renders two td elements within a tr element when isHeader is false", () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Cell1" textSecondCell="Cell2" />);
    const tds = wrapper.find("td");
    expect(tds).toHaveLength(2);
    expect(tds.at(0).text()).toEqual("Cell1");
    expect(tds.at(1).text()).toEqual("Cell2");
    expect(wrapper.find("tr").props().style).toEqual({ backgroundColor: "#f5f5f5ab" });
  });
});
