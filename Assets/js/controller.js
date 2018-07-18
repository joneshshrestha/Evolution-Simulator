document.getElementById("env-running").addEventListener("click", myFunction1);

function myFunction1() {
    boundary = new SimpleBoundary();
    boundary.add_to_world();
}

document.getElementById("env-uphill").addEventListener("click", myFunction2);

function myFunction2() {
    boundary = new SlopeBoundary();
    boundary.add_to_world();
}
