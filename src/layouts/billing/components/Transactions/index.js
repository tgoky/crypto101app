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
// import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Billing page components
import Transaction from "layouts/billing/components/Transaction";

function Transactions() {
  return (
    <Card sx={{ height: "100%" }}>
      <SuiBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <SuiTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Your Transaction&apos;s
        </SuiTypography>
        <SuiBox display="flex" alignItems="flex-start">
          <SuiBox color="text" mr={0.5} lineHeight={0}>
            <Icon color="inherit" fontSize="small">
              date_range
            </Icon>
          </SuiBox>
          <SuiTypography variant="button" color="text" fontWeight="regular">
            17 - 30 April 2022
          </SuiTypography>
        </SuiBox>
      </SuiBox>
      <SuiBox pt={3} pb={2} px={2}>
        <SuiBox mb={2}>
          <SuiTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
            newest
          </SuiTypography>
        </SuiBox>
        <SuiBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="error"
            icon="arrow_downward"
            name="Mid Sell Order Executed !"
            description="18 April 2022, at 12:30 PM"
            value="- $ 250"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Mid Buy Order Executed !"
            description="18 April 2022, at 04:30 AM"
            value="+ $ 200"
          />
        </SuiBox>
        <SuiBox mt={1} mb={2}>
          <SuiTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
            yesterday
          </SuiTypography>
        </SuiBox>
        <SuiBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Mid Buy Order Executed !"
            description="17 April 2022, at 13:45 PM"
            value="+ $ 75"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Trend Level Scalp Executed !"
            description="17 April 2022, at 12:30 PM"
            value="+ $ 1,000"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="RSI Indicator Executed !"
            description="17 April 2022, at 08:30 AM"
            value="+ $ 2,500"
          />
          <Transaction
            color="dark"
            icon="priority_high"
            name="Cancelled Order Executed !"
            description="17 April 2022, at 05:00 AM"
            value="Pending"
          />
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

export default Transactions;
