import { NewTaskForm } from "@/components/NewTaskForm/NewTaskForm";
import { TaskList } from "@/components/TaskList/TaskList";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <Container component="main" maxWidth="md">
      <NewTaskForm />
      <TaskList />
    </Container>
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
