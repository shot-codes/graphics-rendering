<h1>Radiometry and Photometry</h1>

<h2>Part 1</h2>
<p class="font-bold">
	A small 25 W light bulb has an efficiency of 20%. How many photons are approximately emitted per
	second? Assume in the calculations that we only use average photons of wavelength 500 nm.
</p>

<p>We first find the frequency of the light: f = c/λ:</p>
<p class="italic">f = 3(10^8)/500(10^-9) = 6(10^14) Hz</p>
<p>Then, we calculate the energy of each photon:</p>
<p class="italic">E = h(f) = 6.62607015(10^-34)J·s · 6(10^14)Hz = 3.98(10^-19)J</p>
<p>
	Finally, the number of photons emitted per second are determined by dividing the total power
	output by the energy per photon, and multiplying by the efficiency:
</p>
<p class="italic">N = (0.2 · 25W)/3.98(10^-19)J = 1.26(10^21) photons/s</p>

<h2>Part 2</h2>

<div class="font-bold">
	<p>
		A light bulb (2.4 V and 0.7 A), which is approximately sphere-shaped with a diameter of 1 cm,
		emits light equally in all directions. Find the following entities (ideal conditions assumed)
	</p>
	<ul>
		<li>- Radiant flux</li>
		<li>- Radiant intensity</li>
		<li>- Radiant exitance</li>
		<li>- Emitted energy in 5 minutes</li>
	</ul>
	<p>Use W for Watt, J for Joule, m for meter, s for second and sr for steradian</p>
</div>
<div class="italic">
	<p>Flux: V·I = 2.4V · 0.7A = 1.68W</p>
	<p>Intensity: Flux/(4·Pi) = 1.68W/(4·Pi sr) = 0.134 W/sr</p>
	<p>Exitance: Flux/(4·Pi*r^2) = 1.68W/(4·Pi·0.005m^2) = 2.68(10^3) W/m^2</p>
	<p>Emitted energy: Flux·t = 1.68W · 300s = 504J</p>
</div>

<h2>Part 3</h2>
<p class="font-bold">
	The light bulb from above is observed by an eye, which has an opening of the pupil of 6 mm and a
	distance of 1 m from the light bulb. Find the irradiance received in the eye
</p>
<p>
	We start by calculating the irradiance received at a distance of 1m, in all directions around the
	light bulb:
</p>
<p class="italic">E = I/d^2 = (0.134 W/sr) / (1m)^2 = 0.134 W/m^2/sr</p>
<p>
	We now find the irradiance received by only the eye by first finding the solid angle(Ω) subtended
	by a circular aperture at a distance (d):
</p>
<p class="italic">Ω=(Pi·r^2)/d^2 = (Pi·(0.003m)^2) / (1m)^2 = 2.827(10^-5)sr</p>
<p class="italic">E_eye = E · Ω = 0.134 W/m^2/sr · 2.827(10^-5)sr = 3.7858(10^-6) W/m^2</p>

<h2>Part 4</h2>

<p class="font-bold">
	A 200 W spherically shaped light bulb (20% efficiency) emits red light of wavelength 650 nm
	equally in all directions. The light bulb is placed 2 m above a table. Calculate the irradiance at
	the table.
</p>
<p class="font-bold">
	Photometric quantities can be calculated from radiometric ones based on the equation in which V
	(λ) is the luminous efficiency curve.
</p>
<p class="font-bold text-center">Photometric = Radiometric · 685 · V (λ)</p>

<p class="font-bold">
	At 650 nm, the luminous efficiency curve has a value of 0.1. Calculate the illuminance.
</p>

<p class="italic">Radiant Flux = Φ = 0.2 · 200W = 40W</p>
<p class="italic">Irradiance = E = Φ/(4·Pi·d^2) = 40W / (4·Pi·(2m)^2) = 1.59 W/m^2</p>
<p class="italic">
	Illuminance = Ev = E·685 lm/W · V(λ) = 1.59 W/m^2 · 685 lm/W · 0.1 = 109 lm/m^2
</p>

<h2>Part 5</h2>
<p class="font-bold">
	In a simple arrangement the luminous intensity of an unknown light source is determined from a
	known light source. The light sources are placed 1 m from each other and illuminate a double sided
	screen placed between the light sources. The screen is moved until both sides are equally
	illuminated as observed by a photometer. At the position of match, the screen is 35 cm from the
	known source with luminous intensity Is = 40 lm/sr = 40 cd and 65 cm from the unknown light
	source. What is the luminous intensity Ix of the unknown source?
</p>

<p class="italic">Is/Ix = (dx/ds)^2</p>
<p class="italic">40 cd / Ix = (65cm /35cm)^2</p>
<p class="italic">Ix = 40 cd * (35 cm / 65 cm)² ≈ 18.2 cd</p>

<h2>Part 6</h2>
<p class="font-bold">
	The radiance L from a diffuse light source (emitter) of 10 × 10 cm is 5000 W/(sr m2). Calculate
	the radiosity (radiant exitance). How much energy is emitted from the light source?
</p>

<div class="italic">
	<p>Radiosity = L * Pi = 5000 W/(sr·m^2) · Pi = 15708 W/m^2</p>
	<p>Total energy emitted = Radiosity * Area = 15708 W/m^2 · 0.01 m^2 = 157.08 W</p>
</div>

<h2>Part 7</h2>
<p class="font-bold">
	The radiance L = 6000 cos θ W/(m2 sr) for a non-diffuse emitter of area 10 by 10 cm. Find the
	radiant exitance. Also, find the power of the entire light source.
</p>
<div class="italic">
	<p>Radiosity = ∫₀²π ∫₀π/² L cosθ sinθ dθ dφ</p>
	<p>Radiosity = ∫₀²π ∫₀π/² 6000 cos²θ sinθ dθ dφ</p>
	<p>Radiosity = 2000π W/m²</p>
	<p>Total Power = Radiosity · Area = 2000π W/m² · 0.01 m² ≈ 62.83 W</p>
</div>
