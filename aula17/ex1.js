function recursiva(max) {
    if (max >= 12417) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(0);