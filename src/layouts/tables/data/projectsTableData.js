/* eslint-disable react/prop-types */
// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiProgress from "components/SuiProgress";

// Images
import logoSpotify from "assets/images/small-logos/algo.svg";
import logoInvesion from "assets/images/small-logos/chainlink.svg";
import logoJira from "assets/images/small-logos/ethereum.svg";
import logoSlack from "assets/images/small-logos/ripple.svg";
import logoWebDev from "assets/images/small-logos/bitcoin.svg";
import logoXD from "assets/images/small-logos/bnb.svg";

function Completion({ value, color }) {
  return (
    <SuiBox display="flex" alignItems="center">
      <SuiTypography variant="caption" color="text" fontWeight="medium">
        {value}%&nbsp;
      </SuiTypography>
      <SuiBox width="8rem">
        <SuiProgress value={value} color={color} variant="gradient" label={false} />
      </SuiBox>
    </SuiBox>
  );
}

const action = (
  <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
    more_vert
  </Icon>
);

const projectsTableData = {
  columns: [
    { name: "project", align: "left" },
    { name: "budget", align: "left" },
    { name: "status", align: "left" },
    { name: "completion", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      project: [logoSpotify, "Algorand"],
      budget: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          $1,800
        </SuiTypography>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          working
        </SuiTypography>
      ),
      completion: <Completion value={60} color="info" />,
      action,
    },
    {
      project: [logoInvesion, "ChainLink"],
      budget: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          $1,200
        </SuiTypography>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          done
        </SuiTypography>
      ),
      completion: <Completion value={100} color="success" />,
      action,
    },
    {
      project: [logoJira, "Ethereum"],
      budget: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          $1,100
        </SuiTypography>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          canceled
        </SuiTypography>
      ),
      completion: <Completion value={30} color="error" />,
      action,
    },
    {
      project: [logoSlack, "Ripple"],
      budget: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          $700
        </SuiTypography>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          canceled
        </SuiTypography>
      ),
      completion: <Completion value={15} color="error" />,
      action,
    },
    {
      project: [logoWebDev, "Bitcoin"],
      budget: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          $1,600
        </SuiTypography>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          working
        </SuiTypography>
      ),
      completion: <Completion value={80} color="info" />,
      action,
    },
    {
      project: [logoXD, "Binance Coin"],
      budget: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          $800
        </SuiTypography>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          done
        </SuiTypography>
      ),
      completion: <Completion value={100} color="success" />,
      action,
    },
  ],
};

export default projectsTableData;
