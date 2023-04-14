import { TaskContextProvider } from "@/context/tasks/TaskContext";
import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { TaskOutlined } from "@mui/icons-material";
import { AppBar, Toolbar, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next Task List</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <AppBar
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <TaskOutlined color="primary" />
          <Typography variant="h6" color="inherit" noWrap ml={1}>
            Next Task List
          </Typography>
        </Toolbar>
      </AppBar>
      <TaskContextProvider>
        <Component {...pageProps} />
      </TaskContextProvider>
    </>
  );
}
