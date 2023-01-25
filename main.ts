esp8266.init(SerialPin.P12, SerialPin.P8, BaudRate.BaudRate115200)
if (esp8266.isESP8266Initialized() == true) {
    images.iconImage(IconNames.Yes).showImage(0)
} else {
    images.iconImage(IconNames.No).showImage(0)
}
basic.pause(1000)
basic.clearScreen()
esp8266.connectWiFi("NEILHOUSE", "neilblackman")
if (esp8266.isWifiConnected() == true) {
    images.iconImage(IconNames.Yes).showImage(0)
} else {
    images.iconImage(IconNames.No).showImage(0)
}
basic.pause(1000)
basic.clearScreen()
ESP8266_IoT.setMQTT(
ESP8266_IoT.SchemeList.TCP,
"",
"",
"",
""
)
ESP8266_IoT.connectMQTT("", 0, false)
basic.forever(function () {
	
})
