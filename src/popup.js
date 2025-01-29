console.log("[GDT] started Loading");
const stabbing_weapon_input = document.querySelector("#stabbing_weapon_scaling");
const span = document.querySelector(".stabbing_weapon_scaling_value");
stabbing_weapon_input.addEventListener("change", (e) => {
    span.textContent = e.target.value;
});
