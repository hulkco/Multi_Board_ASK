EESchema Schematic File Version 4
EELAYER 30 0
EELAYER END
$Descr A4 11693 8268
encoding utf-8
Sheet 1 1
Title ""
Date "lun. 30 mars 2015"
Rev ""
Comp ""
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
Text Label 8900 2500 0    60   ~ 0
A0
Text Label 8900 2600 0    60   ~ 0
A1
Text Label 8900 2700 0    60   ~ 0
A2
Text Label 8900 2800 0    60   ~ 0
A3
Text Label 10550 3000 0    60   ~ 0
0(Rx)
Text Label 10550 2800 0    60   ~ 0
D2
Text Label 10550 2900 0    60   ~ 0
1(Tx)
Text Label 10550 2700 0    60   ~ 0
D3(**)
Text Label 10550 2600 0    60   ~ 0
D4
Text Label 10550 2500 0    60   ~ 0
D5(**)
Text Label 10550 2400 0    60   ~ 0
D6(**)
Text Label 10550 2300 0    60   ~ 0
D7
Text Label 10550 2100 0    60   ~ 0
D8
Text Label 10550 2000 0    60   ~ 0
D9(**)
Text Label 10550 1900 0    60   ~ 0
D10(**)
NoConn ~ 9400 1600
Text Notes 8550 750  0    60   ~ 0
Shield for Arduino that uses\nthe same pin disposition\nlike "Uno" board Rev 3.
$Comp
L Connector_Generic:Conn_01x08 P1
U 1 1 56D70129
P 9600 1900
F 0 "P1" H 9600 2350 50  0000 C CNN
F 1 "Power" V 9700 1900 50  0000 C CNN
F 2 "Socket_Arduino_Uno:Socket_Strip_Arduino_1x08" V 9750 1900 20  0001 C CNN
F 3 "" H 9600 1900 50  0000 C CNN
	1    9600 1900
	1    0    0    -1  
$EndComp
$Comp
L power:+3.3V #PWR013
U 1 1 56D70538
P 9150 1450
F 0 "#PWR013" H 9150 1300 50  0001 C CNN
F 1 "+3.3V" V 9150 1700 50  0000 C CNN
F 2 "" H 9150 1450 50  0000 C CNN
F 3 "" H 9150 1450 50  0000 C CNN
	1    9150 1450
	1    0    0    -1  
$EndComp
$Comp
L power:+5V #PWR012
U 1 1 56D707BB
P 9050 1350
F 0 "#PWR012" H 9050 1200 50  0001 C CNN
F 1 "+5V" V 9050 1550 50  0000 C CNN
F 2 "" H 9050 1350 50  0000 C CNN
F 3 "" H 9050 1350 50  0000 C CNN
	1    9050 1350
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR014
U 1 1 56D70CC2
P 9300 3150
F 0 "#PWR014" H 9300 2900 50  0001 C CNN
F 1 "GND" H 9300 3000 50  0000 C CNN
F 2 "" H 9300 3150 50  0000 C CNN
F 3 "" H 9300 3150 50  0000 C CNN
	1    9300 3150
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR015
U 1 1 56D70CFF
P 10300 3150
F 0 "#PWR015" H 10300 2900 50  0001 C CNN
F 1 "GND" H 10300 3000 50  0000 C CNN
F 2 "" H 10300 3150 50  0000 C CNN
F 3 "" H 10300 3150 50  0000 C CNN
	1    10300 3150
	1    0    0    -1  
$EndComp
$Comp
L Connector_Generic:Conn_01x06 P2
U 1 1 56D70DD8
P 9600 2700
F 0 "P2" H 9600 2300 50  0000 C CNN
F 1 "Analog" V 9700 2700 50  0000 C CNN
F 2 "Socket_Arduino_Uno:Socket_Strip_Arduino_1x06" V 9750 2750 20  0001 C CNN
F 3 "" H 9600 2700 50  0000 C CNN
	1    9600 2700
	1    0    0    -1  
$EndComp
$Comp
L Connector_Generic:Conn_01x08 P4
U 1 1 56D7164F
P 10000 2600
F 0 "P4" H 10000 2100 50  0000 C CNN
F 1 "Digital" V 10100 2600 50  0000 C CNN
F 2 "Socket_Arduino_Uno:Socket_Strip_Arduino_1x08" V 10150 2550 20  0001 C CNN
F 3 "" H 10000 2600 50  0000 C CNN
	1    10000 2600
	-1   0    0    -1  
$EndComp
Wire Notes Line
	8525 825  9925 825 
Wire Notes Line
	9925 825  9925 475 
Wire Wire Line
	9400 1900 9150 1900
Wire Wire Line
	9400 2000 9050 2000
Wire Wire Line
	9400 2300 8950 2300
Wire Wire Line
	9400 2100 9300 2100
Wire Wire Line
	9400 2200 9300 2200
Connection ~ 9300 2200
Wire Wire Line
	8950 2300 8950 1450
Wire Wire Line
	9050 2000 9050 1350
Wire Wire Line
	9150 1900 9150 1450
Wire Wire Line
	9400 2500 8900 2500
Wire Wire Line
	9400 2600 8900 2600
Wire Wire Line
	9400 2700 8900 2700
Wire Wire Line
	9400 2800 8900 2800
Wire Wire Line
	9400 2900 8900 2900
Wire Wire Line
	9400 3000 8900 3000
$Comp
L Connector_Generic:Conn_01x10 P3
U 1 1 56D721E0
P 10000 1600
F 0 "P3" H 10000 2150 50  0000 C CNN
F 1 "Digital" V 10100 1600 50  0000 C CNN
F 2 "Socket_Arduino_Uno:Socket_Strip_Arduino_1x10" V 10150 1600 20  0001 C CNN
F 3 "" H 10000 1600 50  0000 C CNN
	1    10000 1600
	-1   0    0    -1  
$EndComp
Wire Wire Line
	10200 2100 10550 2100
Wire Wire Line
	10200 2000 10550 2000
Wire Wire Line
	10200 1900 10550 1900
Wire Wire Line
	10200 1800 10550 1800
Wire Wire Line
	10200 1700 10550 1700
Wire Wire Line
	10200 1600 10550 1600
Wire Wire Line
	10200 1300 10550 1300
Wire Wire Line
	10200 1200 10550 1200
Wire Wire Line
	10200 3000 10550 3000
Wire Wire Line
	10200 2900 10550 2900
Wire Wire Line
	10200 2800 10550 2800
Wire Wire Line
	10200 2700 10550 2700
Wire Wire Line
	10200 2600 10550 2600
Wire Wire Line
	10200 2500 10550 2500
Wire Wire Line
	10200 2400 10550 2400
Wire Wire Line
	10200 2300 10550 2300
Wire Wire Line
	10200 1500 10300 1500
Wire Wire Line
	10300 1500 10300 3150
Wire Wire Line
	9300 2100 9300 2200
Wire Wire Line
	9300 2200 9300 3150
Wire Notes Line
	8500 500  8500 3450
Wire Notes Line
	8500 3450 11200 3450
Wire Wire Line
	9400 1800 8650 1800
Text Notes 9700 1600 0    60   ~ 0
1
$Comp
L Connector_Generic:Conn_01x15 J4
U 1 1 5E070545
P 3525 2950
F 0 "J4" H 3525 2125 50  0000 C CNN
F 1 "Conn_01x15" H 3375 3775 50  0001 C CNN
F 2 "Multi_Board_ASK:PinSocket_1x15_P2.54mm_Vertical" H 3525 2950 50  0001 C CNN
F 3 "~" H 3525 2950 50  0001 C CNN
	1    3525 2950
	1    0    0    1   
$EndComp
Text Label 3125 2250 2    50   ~ 0
D13-SCK
Text Label 3125 2650 2    50   ~ 0
A1
Text Label 3125 2750 2    50   ~ 0
A2
Text Label 3125 2850 2    50   ~ 0
A3
Text Label 3125 2950 2    50   ~ 0
SDA-A4
Text Label 3125 3050 2    50   ~ 0
SCL-A5
Text Label 3125 3450 2    50   ~ 0
~RESET
Text Label 3125 3550 2    50   ~ 0
GND
Wire Wire Line
	3125 2250 3325 2250
Wire Wire Line
	3125 3150 3325 3150
Wire Wire Line
	3125 2650 3325 2650
Wire Wire Line
	3125 2750 3325 2750
Wire Wire Line
	3125 2850 3325 2850
Wire Wire Line
	3125 2950 3325 2950
Wire Wire Line
	3125 3050 3325 3050
Wire Wire Line
	3125 3250 3325 3250
Wire Wire Line
	3125 3450 3325 3450
Wire Wire Line
	3125 3650 3325 3650
$Comp
L power:+3.3V #PWR01
U 1 1 5E0C8227
P 2700 2300
F 0 "#PWR01" H 2700 2150 50  0001 C CNN
F 1 "+3.3V" H 2715 2473 50  0000 C CNN
F 2 "" H 2700 2300 50  0001 C CNN
F 3 "" H 2700 2300 50  0001 C CNN
	1    2700 2300
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR03
U 1 1 5E0C8231
P 2875 3650
F 0 "#PWR03" H 2875 3400 50  0001 C CNN
F 1 "GND" H 2880 3477 50  0000 C CNN
F 2 "" H 2875 3650 50  0001 C CNN
F 3 "" H 2875 3650 50  0001 C CNN
	1    2875 3650
	1    0    0    -1  
$EndComp
Text Label 3125 2550 2    50   ~ 0
A0
Wire Wire Line
	3125 2550 3325 2550
Wire Wire Line
	3325 3550 2875 3550
Wire Wire Line
	2875 3550 2875 3650
$Comp
L power:+5V #PWR02
U 1 1 5E0F8F56
P 2750 3250
F 0 "#PWR02" H 2750 3100 50  0001 C CNN
F 1 "+5V" V 2765 3378 50  0000 L CNN
F 2 "" H 2750 3250 50  0001 C CNN
F 3 "" H 2750 3250 50  0001 C CNN
	1    2750 3250
	1    0    0    -1  
$EndComp
Wire Wire Line
	2750 3250 2750 3350
Wire Wire Line
	3325 3350 2750 3350
Wire Wire Line
	2700 2350 2700 2300
Wire Wire Line
	3325 2350 2700 2350
Text Label 3125 3250 2    50   ~ 0
A7
Text Label 3125 3150 2    50   ~ 0
A6
$Comp
L power:PWR_FLAG #FLG01
U 1 1 5E1F7B36
P 7000 750
F 0 "#FLG01" H 7000 825 50  0001 C CNN
F 1 "PWR_FLAG" H 7000 923 50  0000 C CNN
F 2 "" H 7000 750 50  0001 C CNN
F 3 "~" H 7000 750 50  0001 C CNN
	1    7000 750 
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR07
U 1 1 5E1FBD52
P 7000 850
F 0 "#PWR07" H 7000 600 50  0001 C CNN
F 1 "GND" H 7005 677 50  0000 C CNN
F 2 "" H 7000 850 50  0001 C CNN
F 3 "" H 7000 850 50  0001 C CNN
	1    7000 850 
	1    0    0    -1  
$EndComp
$Comp
L power:PWR_FLAG #FLG02
U 1 1 5E1FDFA9
P 7500 750
F 0 "#FLG02" H 7500 825 50  0001 C CNN
F 1 "PWR_FLAG" H 7500 923 50  0000 C CNN
F 2 "" H 7500 750 50  0001 C CNN
F 3 "~" H 7500 750 50  0001 C CNN
	1    7500 750 
	1    0    0    -1  
$EndComp
$Comp
L power:PWR_FLAG #FLG03
U 1 1 5E203FDB
P 8000 750
F 0 "#FLG03" H 8000 825 50  0001 C CNN
F 1 "PWR_FLAG" H 8000 923 50  0000 C CNN
F 2 "" H 8000 750 50  0001 C CNN
F 3 "~" H 8000 750 50  0001 C CNN
	1    8000 750 
	1    0    0    -1  
$EndComp
$Comp
L power:+5V #PWR011
U 1 1 5E20C1F8
P 8000 850
F 0 "#PWR011" H 8000 700 50  0001 C CNN
F 1 "+5V" H 8015 1023 50  0000 C CNN
F 2 "" H 8000 850 50  0001 C CNN
F 3 "" H 8000 850 50  0001 C CNN
	1    8000 850 
	-1   0    0    1   
$EndComp
$Comp
L power:+3.3V #PWR010
U 1 1 5E20D713
P 7500 850
F 0 "#PWR010" H 7500 700 50  0001 C CNN
F 1 "+3.3V" H 7515 1023 50  0000 C CNN
F 2 "" H 7500 850 50  0001 C CNN
F 3 "" H 7500 850 50  0001 C CNN
	1    7500 850 
	-1   0    0    1   
$EndComp
Text Label 3125 3650 2    50   ~ 0
VIN
Wire Wire Line
	4475 3350 3975 3350
Wire Wire Line
	4475 3350 4475 3450
Wire Wire Line
	3975 2550 4175 2550
Wire Wire Line
	3975 2350 4175 2350
$Comp
L power:GND #PWR04
U 1 1 5E13924D
P 4475 3450
F 0 "#PWR04" H 4475 3200 50  0001 C CNN
F 1 "GND" H 4480 3277 50  0000 C CNN
F 2 "" H 4475 3450 50  0001 C CNN
F 3 "" H 4475 3450 50  0001 C CNN
	1    4475 3450
	1    0    0    -1  
$EndComp
Wire Wire Line
	4175 3550 3975 3550
Wire Wire Line
	4175 2250 3975 2250
Wire Wire Line
	4175 2450 3975 2450
Wire Wire Line
	4175 2650 3975 2650
Wire Wire Line
	4175 2850 3975 2850
Wire Wire Line
	4175 2950 3975 2950
Wire Wire Line
	4175 3050 3975 3050
Wire Wire Line
	4175 3150 3975 3150
Wire Wire Line
	4175 3250 3975 3250
Wire Wire Line
	4175 2750 3975 2750
Wire Wire Line
	4175 3450 3975 3450
Wire Wire Line
	4175 3650 3975 3650
Text Label 4175 2250 0    50   ~ 0
D12-MISO
Text Label 4175 2350 0    50   ~ 0
D11-MOSI
Text Label 4175 2650 0    50   ~ 0
D8
Text Label 4175 3050 0    50   ~ 0
D4
Text Label 4175 3250 0    50   ~ 0
D2
Text Label 4175 2750 0    50   ~ 0
D7
Text Label 4175 3450 0    50   ~ 0
~RESET
$Comp
L Connector_Generic:Conn_01x15 J3
U 1 1 5E06C052
P 3775 2950
F 0 "J3" H 3725 2125 50  0000 L CNN
F 1 "Conn_01x15" H 3425 3775 50  0001 L CNN
F 2 "Multi_Board_ASK:PinSocket_1x15_P2.54mm_Vertical" H 3775 2950 50  0001 C CNN
F 3 "~" H 3775 2950 50  0001 C CNN
	1    3775 2950
	-1   0    0    1   
$EndComp
$Comp
L Connector_Generic:Conn_01x12 J2
U 1 1 5D375CC4
P 6500 3175
F 0 "J2" H 6500 2475 50  0000 C CNN
F 1 "feather short" H 6300 2375 50  0001 C CNN
F 2 "Multi_Board_ASK:PinHeader_1x12_P2.54mm_Vertical" H 6500 3175 50  0001 C CNN
F 3 "~" H 6500 3175 50  0001 C CNN
	1    6500 3175
	-1   0    0    1   
$EndComp
Text Label 7100 2575 0    50   ~ 0
VIN
Text Label 6950 2775 2    50   ~ 0
VUSB
Text Label 6950 3075 0    50   ~ 0
D8
Text Label 6950 3375 0    50   ~ 0
D4
Wire Wire Line
	6700 2875 6950 2875
Wire Wire Line
	6700 2975 6950 2975
Wire Wire Line
	6700 3075 6950 3075
Wire Wire Line
	6700 3175 6950 3175
Wire Wire Line
	6700 3275 6950 3275
Wire Wire Line
	6700 3375 6950 3375
Wire Wire Line
	6700 3475 6950 3475
Wire Wire Line
	6700 3575 6950 3575
Wire Wire Line
	6700 3675 6950 3675
Wire Wire Line
	7100 2775 6700 2775
$Comp
L power:+5V #PWR06
U 1 1 5E1A8183
P 7100 2775
F 0 "#PWR06" H 7100 2625 50  0001 C CNN
F 1 "+5V" V 7115 2903 50  0000 L CNN
F 2 "" H 7100 2775 50  0001 C CNN
F 3 "" H 7100 2775 50  0001 C CNN
	1    7100 2775
	0    1    1    0   
$EndComp
Wire Wire Line
	6050 2475 5575 2475
Wire Wire Line
	5575 2475 5575 2575
Text Label 5850 3675 2    50   ~ 0
D2
Wire Wire Line
	5700 2275 6050 2275
Wire Wire Line
	5700 2175 5700 2275
$Comp
L power:GND #PWR09
U 1 1 5D3787E4
P 5575 2575
F 0 "#PWR09" H 5575 2325 50  0001 C CNN
F 1 "GND" H 5580 2402 50  0000 C CNN
F 2 "" H 5575 2575 50  0001 C CNN
F 3 "" H 5575 2575 50  0001 C CNN
	1    5575 2575
	1    0    0    -1  
$EndComp
$Comp
L power:+3.3V #PWR08
U 1 1 5D37877D
P 5700 2175
F 0 "#PWR08" H 5700 2025 50  0001 C CNN
F 1 "+3.3V" H 5715 2348 50  0000 C CNN
F 2 "" H 5700 2175 50  0001 C CNN
F 3 "" H 5700 2175 50  0001 C CNN
	1    5700 2175
	1    0    0    -1  
$EndComp
Wire Wire Line
	5850 3675 6050 3675
Wire Wire Line
	5850 3575 6050 3575
Wire Wire Line
	5850 3475 6050 3475
Wire Wire Line
	5850 3375 6050 3375
Wire Wire Line
	5850 3275 6050 3275
Wire Wire Line
	5850 3175 6050 3175
Wire Wire Line
	5850 3075 6050 3075
Wire Wire Line
	5850 2975 6050 2975
Wire Wire Line
	5850 2875 6050 2875
Wire Wire Line
	5850 2775 6050 2775
Wire Wire Line
	5850 2675 6050 2675
Wire Wire Line
	5850 2575 6050 2575
Wire Wire Line
	5850 2375 6050 2375
Wire Wire Line
	5850 2175 6050 2175
Text Label 5850 3075 2    50   ~ 0
A7
Text Label 5850 2975 2    50   ~ 0
A6
Text Label 5850 2875 2    50   ~ 0
A3
Text Label 5850 2775 2    50   ~ 0
A2
Text Label 5850 2675 2    50   ~ 0
A1
Text Label 5850 2575 2    50   ~ 0
A0
Text Label 5850 2375 2    50   ~ 0
NC
Text Label 5850 2175 0    50   ~ 0
~RESET
$Comp
L Connector_Generic:Conn_01x16 J1
U 1 1 5D375C76
P 6250 2975
F 0 "J1" H 6250 2075 50  0000 C CNN
F 1 "feather long" H 6075 2000 50  0001 C CNN
F 2 "Multi_Board_ASK:PinHeader_1x16_P2.54mm_Vertical" H 6250 2975 50  0001 C CNN
F 3 "~" H 6250 2975 50  0001 C CNN
	1    6250 2975
	1    0    0    1   
$EndComp
Text Label 6950 3575 0    50   ~ 0
SCL-A5
Text Label 6950 3675 0    50   ~ 0
SDA-A4
Text Label 5850 3275 2    50   ~ 0
D11-MOSI
Text Label 5850 3375 2    50   ~ 0
D12-MISO
Text Label 5850 3175 2    50   ~ 0
D13-SCK
Text Notes 4575 2950 1    50   ~ 0
~
Text Notes 4600 3150 2    50   ~ 0
PWM
Text Notes 4825 2250 2    50   ~ 0
PWM
Text Notes 4600 2950 2    50   ~ 0
PWM
Text Notes 4600 2850 2    50   ~ 0
PWM
Text Notes 4825 2550 2    50   ~ 0
PWM
Text Notes 4825 2425 2    50   ~ 0
PWM
NoConn ~ 3325 2450
NoConn ~ 6050 2375
NoConn ~ 6700 2675
Wire Wire Line
	7000 750  7000 850 
Wire Wire Line
	7500 750  7500 850 
Wire Wire Line
	8000 750  8000 850 
Text Label 10550 1800 0    60   ~ 0
D11-MOSI
Text Label 10550 1700 0    60   ~ 0
D12-MISO
Text Label 10550 1600 0    60   ~ 0
D13-SCK
Text Label 10550 1300 0    50   ~ 0
SDA-A4
Text Label 10550 1200 0    50   ~ 0
SCL-A5
Text Label 4175 2550 0    50   ~ 0
D9(**)
Text Label 4175 2450 0    50   ~ 0
D10(**)
Text Label 6950 2975 0    50   ~ 0
D9(**)
Text Label 6950 2875 0    50   ~ 0
D10(**)
Text Label 4175 2950 0    50   ~ 0
D5(**)
Text Label 4175 3150 0    50   ~ 0
D3(**)
Text Label 5850 3575 2    60   ~ 0
1(Tx)
Text Label 5850 3475 2    60   ~ 0
0(Rx)
Text Label 8900 2900 2    50   ~ 0
SDA-A4
Text Label 8900 3000 2    50   ~ 0
SCL-A5
Text Label 4175 3650 0    60   ~ 0
1(Tx)
Text Label 4175 3550 0    60   ~ 0
0(Rx)
Text Label 8650 1800 0    50   ~ 0
~RESET
Text Label 8950 1450 1    50   ~ 0
VIN
Text Label 4175 2850 0    50   ~ 0
D6(**)
Text Label 6950 3275 0    50   ~ 0
D5(**)
Text Label 6950 3475 0    50   ~ 0
D3(**)
Text Label 6950 3175 0    50   ~ 0
D6(**)
NoConn ~ 9400 1700
Text Notes 3325 2450 2    50   ~ 0
AREF
Text Notes 6700 2675 0    50   ~ 0
AREF
Text Notes 9400 1700 2    50   ~ 0
IOREF
Text Notes 10250 1400 0    50   ~ 0
AREF
NoConn ~ 10200 1400
Wire Wire Line
	6700 2575 7100 2575
Text Notes 6200 1975 0    50   ~ 0
J1
Text Notes 6475 2400 0    50   ~ 0
J2
Text Notes 3750 2025 0    50   ~ 0
J3
Text Notes 3475 2025 0    50   ~ 0
J4
$Comp
L MCU_RaspberryPi_and_Boards:Pico U1
U 1 1 608B2D3E
P 3675 5400
F 0 "U1" H 3675 6615 50  0000 C CNN
F 1 "Pico" H 3675 6524 50  0000 C CNN
F 2 "MCU_RaspberryPi_and_Boards:RPi_Pico_SMD_TH" V 3675 5400 50  0001 C CNN
F 3 "" H 3675 5400 50  0001 C CNN
	1    3675 5400
	1    0    0    -1  
$EndComp
Wire Wire Line
	2975 4650 2875 4650
Wire Wire Line
	2875 4650 2875 5150
$Comp
L power:GND #PWR05
U 1 1 609D0420
P 2875 6650
F 0 "#PWR05" H 2875 6400 50  0001 C CNN
F 1 "GND" H 2880 6477 50  0000 C CNN
F 2 "" H 2875 6650 50  0001 C CNN
F 3 "" H 2875 6650 50  0001 C CNN
	1    2875 6650
	1    0    0    -1  
$EndComp
Wire Wire Line
	2975 5150 2875 5150
Connection ~ 2875 5150
Wire Wire Line
	2875 5150 2875 5650
Wire Wire Line
	2975 5650 2875 5650
Connection ~ 2875 5650
Wire Wire Line
	2875 5650 2875 6150
Wire Wire Line
	2975 6150 2875 6150
Connection ~ 2875 6150
Wire Wire Line
	2875 6150 2875 6650
Wire Wire Line
	4375 4650 4475 4650
Wire Wire Line
	4475 4650 4475 5150
$Comp
L power:GND #PWR016
U 1 1 609F0795
P 4475 6650
F 0 "#PWR016" H 4475 6400 50  0001 C CNN
F 1 "GND" H 4480 6477 50  0000 C CNN
F 2 "" H 4475 6650 50  0001 C CNN
F 3 "" H 4475 6650 50  0001 C CNN
	1    4475 6650
	1    0    0    -1  
$EndComp
Wire Wire Line
	4375 6150 4475 6150
Connection ~ 4475 6150
Wire Wire Line
	4475 6150 4475 6650
Wire Wire Line
	4375 5650 4475 5650
Connection ~ 4475 5650
Wire Wire Line
	4475 5650 4475 6150
Wire Wire Line
	4375 5150 4475 5150
Connection ~ 4475 5150
Wire Wire Line
	4475 5150 4475 5650
Wire Wire Line
	4375 4750 4575 4750
NoConn ~ 4575 4750
Text Notes 4625 4800 0    31   ~ 0
3V3_EN Needs no connection because\nit is pulled up on the Raspberry PI Pico
Wire Wire Line
	4375 4850 4525 4850
Wire Wire Line
	4525 4850 4525 4250
$Comp
L power:+3.3V #PWR017
U 1 1 60A285DD
P 4525 4250
F 0 "#PWR017" H 4525 4100 50  0001 C CNN
F 1 "+3.3V" H 4540 4423 50  0000 C CNN
F 2 "" H 4525 4250 50  0001 C CNN
F 3 "" H 4525 4250 50  0001 C CNN
	1    4525 4250
	1    0    0    -1  
$EndComp
Wire Wire Line
	4375 4450 4575 4450
Wire Wire Line
	4375 4550 4575 4550
Text Label 4575 4450 0    50   ~ 0
VIN
$Comp
L power:+5V #PWR018
U 1 1 60A36F8B
P 4575 4550
F 0 "#PWR018" H 4575 4400 50  0001 C CNN
F 1 "+5V" H 4590 4723 50  0000 C CNN
F 2 "" H 4575 4550 50  0001 C CNN
F 3 "" H 4575 4550 50  0001 C CNN
	1    4575 4550
	0    1    1    0   
$EndComp
Wire Wire Line
	4375 4950 4575 4950
NoConn ~ 4575 4950
Wire Wire Line
	4375 5050 4575 5050
Text Label 4575 5050 0    50   ~ 0
A2
Wire Wire Line
	4375 5250 4575 5250
Wire Wire Line
	4375 5350 4575 5350
Text Label 4575 5250 0    50   ~ 0
A1
Text Label 4575 5350 0    50   ~ 0
A0
Wire Wire Line
	4375 5450 4575 5450
Wire Wire Line
	4375 5550 4575 5550
Wire Wire Line
	4375 5750 4575 5750
Wire Wire Line
	4375 5850 4575 5850
Wire Wire Line
	4375 5950 4575 5950
Wire Wire Line
	4375 6050 4575 6050
Wire Wire Line
	4375 6250 4575 6250
Wire Wire Line
	4375 6350 4575 6350
Text Label 4575 5450 0    50   ~ 0
~RESET
Wire Wire Line
	2975 4450 2775 4450
Wire Wire Line
	2975 4550 2775 4550
Wire Wire Line
	2975 4750 2775 4750
Wire Wire Line
	2975 4850 2775 4850
Wire Wire Line
	2975 4950 2775 4950
Wire Wire Line
	2975 5050 2775 5050
Wire Wire Line
	2975 5250 2775 5250
Wire Wire Line
	2975 5350 2775 5350
Wire Wire Line
	2975 5450 2775 5450
Wire Wire Line
	2975 5550 2775 5550
Wire Wire Line
	2975 5750 2775 5750
Wire Wire Line
	2975 5850 2775 5850
Wire Wire Line
	2975 5950 2775 5950
Wire Wire Line
	2975 6050 2775 6050
Wire Wire Line
	2975 6250 2775 6250
Wire Wire Line
	2975 6350 2775 6350
Text Label 2775 4450 2    60   ~ 0
0(Rx)
Text Label 2775 4550 2    60   ~ 0
1(Tx)
Text Label 2775 4750 2    50   ~ 0
D2
Text Label 2775 4850 2    50   ~ 0
D3(**)
Text Label 2775 5950 2    50   ~ 0
D12-MISO
Text Label 2775 5050 2    50   ~ 0
D5(**)
Text Label 2775 6250 2    50   ~ 0
D13-SCK
Text Label 2775 6050 2    50   ~ 0
D11-MOSI
Text Label 2775 4950 2    50   ~ 0
D4
Text Label 2775 5350 2    50   ~ 0
D7
Text Label 4575 6050 0    50   ~ 0
SDA-A4
Text Label 4575 5950 0    50   ~ 0
SCL-A5
Text Label 2775 5250 2    50   ~ 0
D6(**)
NoConn ~ 4575 6250
NoConn ~ 4575 6350
NoConn ~ 4575 5750
NoConn ~ 3575 6550
NoConn ~ 3675 6550
NoConn ~ 3775 6550
NoConn ~ 2700 2300
NoConn ~ 4575 5550
NoConn ~ 4575 5850
Text Label 2775 5450 2    50   ~ 0
D8
Text Label 2775 5550 2    50   ~ 0
D9(**)
Text Label 2775 5750 2    50   ~ 0
D10(**)
NoConn ~ 2775 6350
$EndSCHEMATC
