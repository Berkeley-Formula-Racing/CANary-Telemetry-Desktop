<script>
export default{
    data() {
        return {
            AppName: 'CANary Desktop',
            TeamName: 'Berkeley Formula Racing',
            nameIndex: 0,
            Names: ["CANary Telemetry", "Borkeley Formula Racing", "Forkeley Bormula Racing", "Gob Ears", "Electrical is the best!"],
            isEntered: false,
        }
    },
    methods: {
        changeAppName() {
            this.AppName = this.Names[this.nameIndex]
            this.nameIndex = this.nameIndex + 1
            if (this.nameIndex >= this.Names.length) {
                this.nameIndex = 0
            }
        },

        startApp() {
            this.isEntered = true
            console.log(this.isEntered)
            this.$emit('enterApp', false)
        }
    }
  
}
</script>

<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  </head>
  <body>
    <h1 @click="changeAppName">
        {{AppName}}
    </h1>

    <p>
        {{ TeamName }}
    </p>
    
    <button type="button" @click="startApp" class="btn btn-primary">Start App</button>
</body>
</template>

<style scoped>


@media (min-width: 1024px) {
  body {
    display: grid;  
    justify-content: center; /* Horizontal */  
    align-content: center; /* Vertical */  
  }
  p {text-align: center;}
}

</style>
