const sidebar_manager = [
	{
		display_name: "Dashboard",
		route: "/auth/security/dashboard",
		icon: "bx bx-category-alt",
	},
	{
		display_name: "Surveillance",
		route: "/auth/security/surveillance",
		icon: "bx bx-cctv",
	},
	{
		display_name: "Manage Delivery",
		route: "/auth/security/deliveries",
		icon: "bx bx-shopping-bag",
	},
	{
		display_name: "Manage Guests",
		route: "/auth/security/guests",
		icon: "bx bx-group",
	},
	{
		display_name: "Sign Out",
		route: "",
		icon: "bx bx-log-out",
	},
];

const sidebar_site_manager = [
	{
		display_name: "Home",
		route: "/securityDashboard",
		icon: "bx bx-category-alt",
	},
	{
		display_name: "Surveillance",
		route: "/securitySurveillance",
		icon: "bx bx-cctv",
	},
	{
		display_name: "Manage Delivery",
		route: "/securityManageDelivery",
		icon: "bx bxs-backpack",
	},
	{
		display_name: "Manage Guests",
		route: "/securityManageGuests",
		icon: "bx bxs-group",
	},
];
const sidebar_officer = [
	{
		display_name: "Home",
		route: "/securityDashboard",
		icon: "bx bx-category-alt",
	},
	{
		display_name: "Surveillance",
		route: "/securitySurveillance",
		icon: "bx bx-cctv",
	},
	{
		display_name: "Manage Delivery",
		route: "/securityManageDelivery",
		icon: "bx bxs-backpack",
	},
	{
		display_name: "Manage Guests",
		route: "/securityManageGuests",
		icon: "bx bxs-group",
	},
];
export { sidebar_manager, sidebar_site_manager, sidebar_officer };
