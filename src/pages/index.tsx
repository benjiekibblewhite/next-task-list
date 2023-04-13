import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {
  AppBar,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { TaskInputForm } from "@/components/TaskInputForm/TaskInputForm";
import { TaskList } from "@/components/TaskList/TaskList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Task List</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <AppBar
          // position="absolute"
          color="default"
          elevation={0}
          sx={{
            position: "relative",
            borderBottom: (t) => `1px solid ${t.palette.divider}`,
          }}
        >
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Next Task List
            </Typography>
          </Toolbar>
        </AppBar>
        <Container component="main" maxWidth="md">
          <TaskInputForm />
          <TaskList
            tasks={[
              {
                title: "Task1",
                description: "Hey there you should do this",
                id: 1,
              },
              {
                title: "Task2",
                description: "Hey there you should do this",
                id: 2,
              },
              {
                title: "Task3",
                description: "Hey there you should do this",
                id: 3,
              },
              {
                title: "Task4",
                description: "Hey there you should do this",
                id: 4,
              },
              {
                title: "Task5",
                description: "Hey there you should do this",
                id: 5,
              },
            ]}
          />
        </Container>
      </>
    </>
  );
}
