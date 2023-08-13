AFRAME.registerComponent("bowlingballs", {
    init: function(){
        this.bolos()
    },
    bolos: function(){
        window.addEventListener("keydown", e =>{
            if(e.key === "s"){
                var bowlingballs = document.createElement("a-entity")
                bowlingballs.setAttribute("geometry", {
                    primitive: "sphere",
                    radius: 0.4,
                })
                bowlingballs.setAttribute("material", {
                    color: "black"
                })
                var camera = document.querySelector("#camera")
                pos = camera.getAttribute("position")
                bowlingballs.setAttribute("position", {
                    x: pos.x,
                    y: pos.y,
                    z: pos.z
                })
                var camera = document.querySelector("#camera").object3D
                var direction = new THREE.Vector3()
                camera.getWorldDirection(direction)
                bowlingballs.setAttribute("velocity", direction.multiplyScalar(-10))
                var scene = document.querySelector("#scene")
                scene.appendChild(bowlingballs)
            }
        })
    }
})