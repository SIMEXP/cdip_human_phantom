# cdip_human_phantom
This repository contains packages, scripts, and notebooks for the following article Consistency ofr esting-sta fMRI teconnectivity on a single individual over 2.5 years and 13 sites using the Canadian dementia imaging protocol (to add link and DOI).

Click the following link to reproduce the analysis on binder: 

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/HanadS/cdip_human_phantom/master)


Here is a brief description of each item in the repository:
* **niak_pipeline_t1_average.m** - Octave script averaging T1w images of a subject iteratively with linear registration inside a NIAK container.
* **hpT1AverageAllScansFinal.m** - Octave script that calls niak_pipeline_t1_average.m and provides needed information.
* **hpPreprocessAllScansFinal12202017.m** - Octave script to run a preprocessing pipeline analysis on CDIP data inside a NIAK container.
* **HNU1PreprocessAllScans.m** - Octave script to run a preprocessing pipeline analysis on HNU1 data inside a NIAK container.
* **connectome_testRetest_12202017.m** - Octave script to run a connectome pipeline on preprocessed fMRI data to generate connectivity maps.
* **connectome_testOnly_12202017.m** - Octave script to run a connectome pipeline on preprocessed fMRI data to generate connectivity maps.
* **connectome_HNU_05022018.m** - Octave script to run a connectome pipeline on preprocessed fMRI data to generate connectivity maps.
* **dashboard** - a Jupyter notebook that provides univariate tests between vbm subtypes and diagnosis
* **dashboard** - an Octave script to build subtypes of grey matter atrophy and extract weights from structural T1 images
* **dashboard** - a Jupyter notebook containing analyses that give a highly predictive signature (HPS) of Alzheimer's disease dementia from cognitive and structural brain features that were derived from real data



This repository has also been archived on Zenodo: (provide link and DOI)
 
