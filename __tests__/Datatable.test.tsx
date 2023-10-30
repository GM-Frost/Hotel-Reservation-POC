import React from "react";
import Datatable from "@/components/Datatable";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import userEvent from "@testing-library/user-event";

const mockData = [
  {
    stay: {
      arrivalDate: "",
      departureDate: "",
    },
    room: {
      roomSize: "Standard Room",
      roomQuantity: 1,
    },
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    addressStreet: {
      streetName: "",
      streetNumber: "",
    },
    addressLocation: {
      zipCode: "",
      state: "",
      city: "",
    },
    extras: [],
    payment: "",
    note: " ",
    tags: ["hotel", "booking"],
    reminder: false,
    newsletter: false,
    confirm: false,
  },
];

const mock = new MockAdapter(axios);

describe("Datatable component", () => {
  beforeAll(() => {
    mock.onGet("http://localhost:8000/reservations").reply(200, mockData);
  });

  afterAll(() => {
    mock.restore();
  });

  test("renders data fetched from the API", async () => {
    render(<Datatable search="" sort="firstName" />);

    await waitFor(() => {
      expect(screen.getByText("")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText("")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText("Deluxe (QTY: 1)")).toBeInTheDocument();
    });
  });

  test("clicks the Edit button", async () => {
    render(<Datatable search="" sort="firstName" />);
    const editButton = screen.getByRole("button", { name: /Edit/i });
    await userEvent.click(editButton);
  });

  test("clicks the Delete button", async () => {
    render(<Datatable search="" sort="firstName" />);
    const deleteButton = screen.getByRole("button", { name: /Delete/i });
    await userEvent.click(deleteButton);
  });
});
