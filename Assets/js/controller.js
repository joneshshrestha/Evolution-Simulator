const form = document.querySelector('form');
const form_population = document.getElementById('form-population')
const form_generation_period = document.getElementById('form_generation_period')
const form_mutation_rate = document.getElementById('form_mutation_rate');
const form_env = document.getElementById("env_selection");

// Prevent Reloading
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (form_population.value) population_size = form_population.value;
    if (form_generation_period.value) generationPeriod = form_generation_period.value;
    if (form_mutation_rate.value) mutation_rate = form_mutation_rate.value;
    if (form_env.value === "Simple") {
        boundary = new SimpleBoundary();
        boundary.add_to_world()
    } else {
        boundary = new SlopeBoundary();
        boundary.add_to_world();
    }
});