import { Box, Typography, useTheme } from "@mui/material";
import { EmptyStateProps } from "./EmptyState.types";

export function EmptyState({ text, Icon }: EmptyStateProps) {
  const theme = useTheme();
  return (
    <Box mt={3} p={1} justifyContent={"center"} textAlign={"center"}>
      {Icon}
      <Typography mt={1} color={theme.palette.text.secondary}>
        {text}
      </Typography>
    </Box>
  );
}
