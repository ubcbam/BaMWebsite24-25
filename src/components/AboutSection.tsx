export default function AboutSection() {
  return (
    <section 
      id="about"
      className="
        relative bg-transparent
        flex flex-col 
        items-center justify-center
        px-4 py-20
      "
    >
      <div className="max-w-2xl text-center space-y-6 text-gray-900">
        <h2 className="text-4xl font-bold">We’re at the intersection of music & neuroscience.</h2>
        <p className="text-lg">
        UBC Brain and Music (BaM) is a unique student organization where people come together to explore music cognition 
        and interact with music through the lens of science. Running events since 2021, stay tuned for our journal club, research clusters,
        and third spring symposium, where academic guest speakers and musicians alike share their and expertise. Our events are open to everyone, 
        not just UBC students.
        </p>
      </div>
    </section>
  );
}
