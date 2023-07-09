<template>
    <div>
        <div style="text-align: center;">
            <img alt="Curl Logo" class="logo" src="../assets/LogoCurl.svg" style="width: 380px; height: auto;">
        <h1 style="margin-bottom: 0.5cm;">Wir sind <em>curl.</em>, dein persönlicher Fitnesstracker!</h1>
        <p>Bei <em>curl.</em> handelt es sich um eine innovative Plattform, die es dir ermöglicht, deine persönlichen Fitnessübungen zu verfolgen und zu optimieren. Egal, ob du ein erfahrener Fitness-Enthusiast bist oder gerade erst mit deiner Fitnessreise beginnst, <em>curl.</em> ist dein treuer Begleiter, um deine Fortschritte zu verfolgen und deine Ziele zu erreichen.</p>

        <h4 style="text-align: left;  padding-left: 1cm;">So funktioniert´s</h4>
        <p>Mit <em>curl.</em> kannst du deine Übungen nach deinen eigenen Bedürfnissen und Präferenzen anpassen. Klicke die gewünschte Übung an, wähle die entsprechende Kategorie <em>(Push oder Pull)</em> und trage das verwendete Gewicht ein. Unser benutzerfreundliches Interface ermöglicht es dir, all deine Daten mühelos zu erfassen und im Laufe der Zeit eine detaillierte Übersicht deiner Leistungen zu erhalten.</p>
        <p>Unser Ziel ist es, dich bei deiner Fitnessreise zu unterstützen und dich zu ermutigen, das Beste aus dir herauszuholen.</p>

        <h4 style="text-align: left;  padding-left: 1cm;">Was wir dir bieten</h4>
        <p>Unsere Plattform bietet dir nicht nur die Möglichkeit, deine Übungen zu tracken, sondern auch deine Fortschritte zu visualisieren. Du hast Zugang zu deinen persönlichen Fitness-Einträgen, um zu sehen, wie du dich entwickelst und wo du Verbesserungen erzielen kannst. <em>curl.</em> unterstützt dich dabei, deine Grenzen zu überwinden und deine Fitnessziele effektiv zu erreichen. Deswegen bieten wir dir auch kostenlose Trainingspläne an, mit denen du sofort starten kannst!</p>

        <p style="margin-bottom: 2cm;">Starte noch heute deine Reise zu einem fitteren und gesünderen Ich mit <em>curl.</em> Registriere dich kostenlos und entdecke die vielfältigen Möglichkeiten, deine Fitnessübungen zu tracken, Fortschritte zu erzielen und deine Ziele zu erreichen. Wir freuen uns darauf, dich auf dieser spannenden Reise zu begleiten!</p>
            <div>
                <div class="row justify-content-center" style="margin-top: 2cm;">
                    <div class="col-md-6">
                        <button type="button" class="btn btn-primary btn-sm btn-block hover-button" @click="downloadPullPNG" style="background: transparent; margin-right: 3cm;">Pull Training Download</button>
                    </div>
                    <div class="col-md-6">
                        <button type="button" class="btn btn-primary btn-sm btn-block hover-button" @click="downloadSecondPNG" style="background: transparent;">Push Training Download</button>
                    </div>
                </div>
            </div>


    </div>
    </div>
</template>

<script>
export default {
    name: "ExerciseProWelcome",
    methods: {
        downloadPNG(pngFilePath, fileName) {
            const link = document.createElement('a');
            link.href = pngFilePath;
            link.target = '_blank';
            link.download = fileName;
            link.click();
        },
        downloadPullPNG() {
            const pngFilePath = require('@/assets/PullEins.png');
            this.downloadPNG(pngFilePath, 'PullEins.png');
        },
        downloadSecondPNG() {
            const secondPngFilePath = require('@/assets/PushEins.png');
            this.downloadPNG(secondPngFilePath, 'PushEins.png');
        },
    },



}
</script>

<style scoped>
p {
    text-align: justify;
    padding-left: 1cm;
    padding-right: 1cm;
    color: white;
}

body
{
    color: white;
}
.hover-button {
    position: relative;
    overflow: hidden;
}

.hover-button::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0;
    transition: opacity 0.3s;
}

.hover-button:hover::after {
    opacity: 0.3;
}

</style>
