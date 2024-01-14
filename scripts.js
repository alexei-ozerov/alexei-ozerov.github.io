const delay = ms => new Promise(res => setTimeout(res, ms));
const triggerLoadScreen = async destination => {
    const ele = document.getElementById("loaderScreen");
    ele.classList.add("is-active");
    await delay(1000);
    ele.classList.remove("is-active");
    await delay(1000);
    window.location.href = destination;
}