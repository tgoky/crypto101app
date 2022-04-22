/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

// Billing page components
import Invoice from "layouts/billing/components/Invoice";

function Invoices() {
  return (
    <Card id="delete-account" sx={{ height: "100%" }}>
      <SuiBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <SuiTypography variant="h6" fontWeight="medium">
          Trade Executions
        </SuiTypography>
        <SuiButton variant="outlined" color="info" size="small">
          view all
        </SuiButton>
      </SuiBox>
      <SuiBox p={2}>
        <SuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Invoice date="April, 01, 2022" id="#MS-415646" price="$250" />
          <Invoice date="April, 10, 2022" id="#RV-126749" price="$200" />
          <Invoice date="April, 05, 2022" id="#QW-103578" price="$75" />
          <Invoice date="May, 25, 2022" id="#MS-415646" price="$100" />
          <Invoice date="April, 01, 2022" id="#AR-803481" price="$300" noGutter />
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

export default Invoices;
