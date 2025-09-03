import { Card } from "~/components/ui/card";

const Team = () => (
  <section className="relative pb-36 md:pb-56">
    <div className="xs:grid-cols-2 container mt-24 grid grid-cols-1 gap-x-3.5 gap-y-6 px-4 md:grid-cols-3 lg:grid-cols-4">
      <Card
        name={"Jyoti Rani"}
        image={"/images/jyoti.jpg"}
        position={"President"}
        linkedin={"https://www.linkedin.com/in/jyotiinar/"}
      />
      <Card
        name={"Vardaan Tekriwal"}
        image={"/images/vardaan.jpg"}
        position={"Exec"}
        linkedin={"https://www.linkedin.com/in/vtekriwal2211/"}
      />
      <Card
        name={"Stephen Xie"}
        image={"/images/stephen.jpg"}
        position={"Exec"}
        linkedin={"https://www.linkedin.com/in/stephen-xie/"}
      />
      <Card
        name={"Alex Mehregan"}
        image={"/images/alex.jpg"}
        position={"Exec"}
        linkedin={"https://www.linkedin.com/in/alex-mehregan/"}
      />
      <Card
        name={"Dylan Westland"}
        image={"/images/dylan.jpg"}
        position={"Exec"}
        linkedin={"https://www.linkedin.com/in/dylanwestland/"}
      />
      <Card
        name={"Ari Ramsan"}
        image={"/images/ari.jpg"}
        position={"Exec"}
        linkedin={"https://www.linkedin.com/in/ari-ramsan/"}
      />
      <Card
        name={"Rohan Sontakke"}
        image={"/images/rohan.jpg"}
        position={"Exec"}
        linkedin={"https://www.linkedin.com/in/rohan-sontakke-rss/"}
      />
      <Card
        name={"Diya Girish Kumar"}
        image={"/images/diya.jpg"}
        position={"Exec"}
        linkedin={"https://www.linkedin.com/in/diyagirishkumar/"}
      />
      <Card
        name={"Rushil Mohan"}
        image={"/images/rushil.jpg"}
        position={"Exec"}
        linkedin={"https://www.linkedin.com/in/rushilmoh/"}
      />
    </div>
    <div className="xs:grid-cols-2 container mt-32 grid grid-cols-1 gap-x-3.5 gap-y-6 px-4 md:grid-cols-3 lg:grid-cols-4"></div>
  </section>
);

export default Team;
