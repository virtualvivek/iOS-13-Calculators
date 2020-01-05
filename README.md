<h2 align="center"> <img src="https://github.com/vivekverma007/ios-13-Calculator/blob/master/preview/app_title.png" width="340" /> </h2>

<p align="center">
	<a href="https://www.google.com/search?q=web">
    <img src="https://img.shields.io/badge/Platform-Web-yellow.svg?color=purple"
      alt="Web" />
  </a>
	
	
<p align="center">
	<a href="https://angularjs.org">
    <img src="https://img.shields.io/badge/Framework-Angularjs-yellow.svg?color=red"
      alt="Framework" />
  </a>	
  	
  <a href="https://github.com/vivekverma007/ios-13-Calculators">
    <img src="https://img.shields.io/github/repo-size/vivekverma007/ios-13-Calculators.svg?color=orange"
      alt="Repo. Size" />
  </a>
  	<a href="https://github.com/vivekverma007/ios-13-Calculators/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/vivekverma007/ios-13-Calculators.svg?color=blue"
      alt="License: Apache" />
  </a>
  	<a href="https://github.com/vivekverma007/ios-13-Calculators">
    <img src="https://img.shields.io/badge/Release-v2.0-darklime.svg?style=flat"
      alt="Release" />
  </a>
  
  
  <a href="https://virtualizme-cals.netlify.com">
    <img src="https://img.shields.io/badge/⚡ live demo-here-green.svg?style=flat"
      alt="Demo" />
  </a>
  
  
</p>

<p align="center"><img src="https://github.com/vivekverma007/ios-13-Calculator/blob/master/preview/preview1.png" width="400" /> 
<img src="https://github.com/vivekverma007/ios-13-Calculator/blob/master/preview/preview2.png" width="400" /></p> 




<h4 align="center">A light-weight library provides ios 13 style calculators for web applications</h4>

<p align="center">
<img src="https://github.com/vivekverma007/ios-13-Calculator/blob/master/preview/app_dark.png" width="28" />​ See a similar dark version  here - <a href="https://github.com/vivekverma007/iweb-calculator">Dark version of ios Calculator</a>
</p>	

___

<p align="center">
	
<h3 align="center">Overview</h3>
 <p align="center">An ios 13 style calculators for web browsers.
 Easily Embbed and use calculated results easily in your pages. 
 This project is inspired from the `light theme` introduced by apple inc. to apply styles in html css format.</p>
 
 <p align="center"><img src="https://github.com/vivekverma007/ios-13-Calculator/blob/master/preview/previewMain_.jpg" width="750" /></p> 
 
</p>
 <p align="center">
 
 ## Installation
 
 Include `ios-calculators` folder in your target project file.
 
 Add where you want to add between your layout using a preprocessing language-

```php
<?php include 'include/Calculator.html';?>
```
#### OR  
Simply copy the html code and add between you page.


### Requirements

```html
<script type='text/javascript' src='angular.min.js'></script>

```
</p>  

## Basic Calculator

<img align="left" src="https://github.com/vivekverma007/ios-13-Calculator/blob/master/preview/anim_basic.gif" width="180" />

### Usage
To use values returned by the Basic calculator-
```html
use {{c_value}}

Eg: <input type="text" placeholder="Result" value="{{c_value}}"/>
```
OR through `ng` tag-
```js
ng-model="c_value"
```


​
## BMI Calculator

<img align="left" src="https://github.com/vivekverma007/ios-13-Calculator/blob/master/preview/anim_bmi.gif" width="180" />

### Usage
To use values returned by the BMI calculator-
```html
use {{b_value}}

Eg: <input type="text" placeholder="BMI value" value="{{b_value}}"/>
```
OR through `ng` tag-
```js
ng-model="b_value"
```



## Timer

<img align="left" src="https://github.com/vivekverma007/ios-13-Calculator/blob/master/preview/anim_timer.gif" width="180" />

### Usage

 <p><b>Standalone timer app here : </b><a href="https://google.com">ios-13-Calculators/iosTimer</a><p/>

To use values returned by the Timer-
```html
use {{counter | formatTimer}}

Eg: <input type="text" placeholder="BMI value" value="{{counter | formatTimer}}"/>
```

## ⚡ Live Demo : [virtualiz.me/ios13-Calculators](https://virtualizme-cals.netlify.com/)

<a href="https://virtualizme-cals.netlify.com/"><img src="https://github.com/vivekverma007/ios-13-Calculator/blob/master/preview/demo_button.png" width="140" /></a> 


### Browser Compatibility
![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png)
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | 9.1+ ✔ | Latest ✔ |


## License

ios13-Calculators is licensed under `Apache-2.0 license`. View [license](https://github.com/vivekverma007/ios-13-Calculators/blob/master/LICENSE).<br>
Copyright (c) 2019 @vivekverma007
