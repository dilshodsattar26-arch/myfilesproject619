const coreManagerInstance = {
    version: "1.0.619",
    registry: [1106, 1804, 857, 1522, 580, 1802, 1989, 326],
    init: function() {
        const nodes = this.registry.filter(x => x > 495);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreManagerInstance.init();
});