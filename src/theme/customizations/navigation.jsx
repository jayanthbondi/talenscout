import { alpha } from "@mui/material/styles";
import { dividerClasses } from "@mui/material/Divider";
import { menuItemClasses } from "@mui/material/MenuItem";
import { selectClasses } from "@mui/material/Select";
import { tabClasses } from "@mui/material/Tab";
import { gray, brand } from "../themePrimitives";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/ArrowDropDown";

export const navigationCustomizations = {
  MuiMenuItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.shape.borderRadius,
        padding: "6px 8px",
        [`&.${menuItemClasses.focusVisible}`]: {
          backgroundColor: "transparent",
        },
        [`&.${menuItemClasses.selected}`]: {
          [`&.${menuItemClasses.focusVisible}`]: {
            backgroundColor: alpha(theme.palette.action.selected, 0.3),
          },
        },
      }),
    },
  },
  MuiMenu: {
    styleOverrides: {
      list: {
        // gap: "0px",
        [`&.${dividerClasses.root}`]: {
          margin: "0 -8px",
        },
      },
      // paper: ({ theme }) => ({
      //   marginTop: "4px",
      //   borderRadius: theme.shape.borderRadius,
      //   border: `1px solid ${theme.palette.divider}`,
      //   backgroundImage: "none",
      //   background: "hsl(0, 0%, 100%)",
      //   boxShadow:
      //     "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px",
      //   [`& .${buttonBaseClasses.root}`]: {
      //     "&.Mui-selected": {
      //       backgroundColor: alpha(theme.palette.action.selected, 0.3),
      //     },
      //   },
      //   ...theme.applyStyles("dark", {
      //     background: gray[900],
      //     boxShadow:
      //       "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px",
      //   }),
      // }),
    },
  },

  MuiSelect1: {
    defaultProps: {
      IconComponent: KeyboardArrowDownRoundedIcon, // Set the custom dropdown icon globally
    },
    styleOverrides: {
      root: ({ theme }) => ({
        padding: "8px 12px", // Match padding to MuiOutlinedInput
        color: theme.palette.text.primary, // Match text color
        borderRadius: theme.shape.borderRadius, // Match border radius
        border: `1px solid ${theme.palette.divider}`, // Match border to MuiOutlinedInput
        backgroundColor: theme.palette.background.default, // Match background
        transition: "border 120ms ease-in", // Match transition
        "&:hover": {
          borderColor: theme.palette.grey[400], // Match hover behavior
        },
        [`&.${selectClasses.focused}`]: {
          borderColor: brand[400], // Match focused state color
        },
        "&:before, &:after": {
          display: "none", // Ensure consistent behavior for before/after pseudo-elements
        },
        ...theme.applyStyles("dark", {
          backgroundColor: gray[800], // Dark mode background color
          "&:hover": {
            borderColor: gray[500], // Dark mode hover color
          },
        }),
      }),
      select: ({ theme }) => ({
        display: "flex",
        alignItems: "center",
        ...theme.applyStyles("dark", {
          display: "flex",
          alignItems: "center",
          "&:focus-visible": {
            backgroundColor: gray[900],
          },
        }),
      }),
    },
  },
  MuiLink: {
    defaultProps: {
      underline: "none",
    },
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.text.primary,
        fontWeight: 500,
        position: "relative",
        textDecoration: "none",
        width: "fit-content",
        "&::before": {
          content: '""',
          position: "absolute",
          width: "100%",
          height: "1px",
          bottom: 0,
          left: 0,
          backgroundColor: theme.palette.text.secondary,
          opacity: 0.3,
          transition: "width 0.3s ease, opacity 0.3s ease",
        },
        "&:hover::before": {
          width: 0,
        },
        "&:focus-visible": {
          outline: `3px solid ${alpha(brand[500], 0.5)}`,
          outlineOffset: "4px",
          borderRadius: "2px",
        },
      }),
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: ({ theme }) => ({
        backgroundColor: theme.palette.background.default,
      }),
    },
  },
  MuiPaginationItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        "&.Mui-selected": {
          color: "white",
          backgroundColor: theme.palette.grey[900],
        },
        ...theme.applyStyles("dark", {
          "&.Mui-selected": {
            color: "black",
            backgroundColor: theme.palette.grey[50],
          },
        }),
      }),
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: { minHeight: "fit-content" },
      indicator: ({ theme }) => ({
        // backgroundColor: theme.palette.grey[800],
        ...theme.applyStyles("dark", {
          // backgroundColor: theme.palette.grey[200],
        }),
      }),
    },
  },
  MuiTab: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: "6px 8px",
        marginBottom: "8px",
        textTransform: "none",
        minWidth: "fit-content",
        minHeight: "fit-content",
        // color: theme.palette.text.secondary,
        borderRadius: theme.shape.borderRadius,
        border: "1px solid",
        borderColor: "transparent",
        ":hover": {
          // color: theme.palette.text.primary,
          // backgroundColor: gray[100],
          // borderColor: gray[200],
        },
        [`&.${tabClasses.selected}`]: {
          // color: gray[900],
        },
        ...theme.applyStyles("dark", {
          ":hover": {
            // color: theme.palette.text.primary,
            // backgroundColor: gray[800],
            // borderColor: gray[700],
          },
          [`&.${tabClasses.selected}`]: {
            // color: "#fff",
          },
        }),
      }),
    },
  },
  MuiStepConnector: {
    styleOverrides: {
      line: ({ theme }) => ({
        borderTop: "1px solid",
        borderColor: theme.palette.divider,
        flex: 1,
        borderRadius: "99px",
      }),
    },
  },
  MuiStepIcon: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: "transparent",
        border: `1px solid ${gray[400]}`,
        width: 12,
        height: 12,
        borderRadius: "50%",
        "& text": {
          display: "none",
        },
        "&.Mui-active": {
          border: "none",
          color: theme.palette.primary.main,
        },
        "&.Mui-completed": {
          border: "none",
          color: theme.palette.success.main,
        },
        ...theme.applyStyles("dark", {
          border: `1px solid ${gray[700]}`,
          "&.Mui-active": {
            border: "none",
            color: theme.palette.primary.light,
          },
          "&.Mui-completed": {
            border: "none",
            color: theme.palette.success.light,
          },
        }),
        variants: [
          {
            props: { completed: true },
            style: {
              width: 12,
              height: 12,
            },
          },
        ],
      }),
    },
  },
  MuiStepLabel: {
    styleOverrides: {
      label: ({ theme }) => ({
        "&.Mui-completed": {
          opacity: 0.6,
          ...theme.applyStyles("dark", { opacity: 0.5 }),
        },
      }),
    },
  },
};
