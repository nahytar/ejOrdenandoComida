function ask(menu) {
    if (menu.indexOf("ceviche") >= 0) {
        return "quiero ceviche";
    } else if (menu.indexOf("tacos al pastor") >= 0) {
        return "quiero tacos al pastor";
    } else if (menu.indexOf("empanada chilena") >= 0) {
        return "quiero empanada chilena";
    } else {
        return "quiero hamburguesa";
    }
}