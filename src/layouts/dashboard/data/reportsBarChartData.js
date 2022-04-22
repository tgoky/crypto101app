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

const reportsBarChartData = {
  chart: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: { label: "Sales", data: [450, 200, 100, 220, 500, 100, 400, 230, 500] },
  },
  items: [
    {
      icon: { color: "primary", component: "library_books" },
      label: "users",
      progress: { content: "1.9K", percentage: 60 },
    },
    {
      icon: { color: "info", component: "touch_app" },
      label: "trades",
      progress: { content: "3.4K", percentage: 90 },
    },
    {
      icon: { color: "warning", component: "payment" },
      label: "Strategies",
      progress: { content: "1.3K", percentage: 30 },
    },
    {
      icon: { color: "error", component: "extension" },
      label: "Online",
      progress: { content: "43", percentage: 50 },
    },
  ],
};

export default reportsBarChartData;
