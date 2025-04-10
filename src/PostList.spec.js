import React from "react";
import PostList from "./PostList";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

beforeEach(() => {
  global.fetch = jest.fn();
});

describe("PostList component", () => {
  test("displays the loading state when the data is being fetched, the loading message should be visible.", () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    });
    render(<PostList />);
    expect(screen.getByText(/Loading the data.../)).toBeInTheDocument();
  });

  test("When the data is successfully fetched, posts should bedisplayed with their title and body.", async () => {
    const mockData = [
      { id: 1, title: "Post 1", body: "body1" },
      { id: 2, title: "Post 2", body: "body2" },
      { id: 3, title: "Post 3", body: "body3" },
    ];
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });
    render(<PostList />);
    await waitFor(() => {
      expect(screen.getAllByTestId("post").length).toBe(mockData.length);
    });
  });
  test("If the API request fails, the error message should be displayed.", async () => {
    fetch.mockResolvedValueOnce(new Error("Error"));
    render(<PostList />);
    await waitFor(() => {
      expect(screen.getByText(/Error: Error/i)).toBeInTheDocument();
    });
  });
});
