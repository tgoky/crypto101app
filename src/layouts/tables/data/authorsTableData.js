/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";

import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";
import SuiBadge from "components/SuiBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import team6 from "assets/images/team-6.jpg";
import team7 from "assets/images/team-7.jpg";
import team8 from "assets/images/team-8.jpg";
import team9 from "assets/images/team-9.jpg";
import team10 from "assets/images/team-10.jpg";
import team11 from "assets/images/team-11.jpg";

function Author({ image, name, email }) {
  return (
    <SuiBox display="flex" alignItems="center" px={1} py={0.5}>
      <SuiBox mr={2}>
        <SuiAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SuiBox>
      <SuiBox display="flex" flexDirection="column">
        <SuiTypography variant="button" fontWeight="medium">
          {name}
        </SuiTypography>
        <SuiTypography variant="caption" color="secondary">
          {email}
        </SuiTypography>
      </SuiBox>
    </SuiBox>
  );
}

function Function({ job, org }) {
  return (
    <SuiBox display="flex" flexDirection="column">
      <SuiTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SuiTypography>
      <SuiTypography variant="caption" color="secondary">
        {org}
      </SuiTypography>
    </SuiBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "crypto", align: "left" },
    { name: "balance", align: "left" },
    { name: "pnl", align: "center" },
    { name: "timestamp", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      crypto: <Author image={team11} name="Bitcoin" email="Bitcoin/USD" />,
      balance: <Function job="$3,000" org="USD" />,
      pnl: (
        <SuiBadge variant="gradient" badgeContent="+6% Profit" color="success" size="xs" container />
      ),
      timestamp: (
        <SuiTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/22
        </SuiTypography>
      ),
      action: (
        <SuiTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Rebalance
        </SuiTypography>
      ),
    },
    {
      crypto: <Author image={team9} name="ChainLink" email="LINK/USD" />,
      balance: <Function job="$1,500" org="USD" />,
      pnl: (
        <SuiBadge variant="gradient" badgeContent="-3% Loss" color="error" size="xs" container />
      ),
      timestamp: (
        <SuiTypography variant="caption" color="secondary" fontWeight="medium">
          11/01/22
        </SuiTypography>
      ),
      action: (
        <SuiTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Rebalance
        </SuiTypography>
      ),
    },
    {
      crypto: <Author image={team6} name="Ripple" email="Ripple/USD" />,
      balance: <Function job="$1,000" org="USD" />,
      pnl: (
        <SuiBadge variant="gradient" badgeContent="+11% Profit" color="success" size="xs" container />
      ),
      timestamp: (
        <SuiTypography variant="caption" color="secondary" fontWeight="medium">
          19/09/22
        </SuiTypography>
      ),
      action: (
        <SuiTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Rebalance
        </SuiTypography>
      ),
    },
    {
      crypto: <Author image={team7} name="Binance Coin" email="BNB/USD" />,
      balance: <Function job="$800" org="USD" />,
      pnl: (
        <SuiBadge variant="gradient" badgeContent="-11% Loss" color="error" size="xs" container />
      ),
      timestamp: (
        <SuiTypography variant="caption" color="secondary" fontWeight="medium">
          24/02/22
        </SuiTypography>
      ),
      action: (
        <SuiTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Rebalance
        </SuiTypography>
      ),
    },
    {
      crypto: <Author image={team8} name="Ethereum" email="ETH/USD" />,
      balance: <Function job="$400" org="USD" />,
      pnl: (
        <SuiBadge variant="gradient" badgeContent="+9% Profit" color="error" size="xs" container />
      ),
      timestamp: (
        <SuiTypography variant="caption" color="secondary" fontWeight="medium">
          04/10/22
        </SuiTypography>
      ),
      action: (
        <SuiTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Rebalance
        </SuiTypography>
      ),
    },
    {
      crypto: <Author image={team10} name="Algorand" email="ALGO/USD" />,
      balance: <Function job="$500" org="USD" />,
      pnl: (
        <SuiBadge variant="gradient" badgeContent="+4% Profit" color="success" size="xs" container />
      ),
      timestamp: (
        <SuiTypography variant="caption" color="secondary" fontWeight="medium">
          14/09/22
        </SuiTypography>
      ),
      action: (
        <SuiTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Rebalance
        </SuiTypography>
      ),
    },
  ],
};

export default authorsTableData;
