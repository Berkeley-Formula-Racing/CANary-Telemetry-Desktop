<script>
export default{
    data() {
        return {
            AppName: 'CANary Desktop',
            TeamName: 'Berkeley Formula Racing',
            nameIndex: 0,
            Names: ["CANary Telemetry", "Borkeley Formula Racing","Student Driver", "Stolen Property", "Gob Ears", "Legally Liable"],
            isEntered: false,
        }
    },
    methods: {

    }
  
}
</script>

<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  </head>
  <body>
    <h1>
        Settings
    </h1>
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

button {
    margin: 10px;
}

</style>
