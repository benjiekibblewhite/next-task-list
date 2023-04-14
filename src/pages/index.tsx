import { NewTaskForm } from "@/components/NewTaskForm/NewTaskForm";
import { TaskList } from "@/components/TaskList/TaskList";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { Inter } from "next/font/google";
import Head from "next/head";

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
          <NewTaskForm />
          <TaskList />
        </Container>
      </>
    </>
  );
}

export function getStaticProps() {
  /*
    Ideally we'd be storing the user's tasks in a database, and fetching directly 
    from the db here in getServerSideProps. 
    
    I'm just persisting the data in localStorage, however,
    which isn't available on the server. So let's just add this to force the page
    to statically render, and hydrate on the client.
  */
  return { props: {} };
}
