import React from "react";
import { render, screen } from "@testing-library/react";

import CustomersPage from "../CustomersPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders customers page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CustomersPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("customers-datatable")).toBeInTheDocument();
    expect(screen.getByRole("customers-add-button")).toBeInTheDocument();
});
