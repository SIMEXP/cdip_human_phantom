# cdip_human_phantom
This repository contains packages, scripts, and notebooks for the following article Consistency ofr esting-sta fMRI teconnectivity on a single individual over 2.5 years and 13 sites using the Canadian dementia imaging protocol (to add link and DOI).

Click the following link to reproduce the analysis on binder: 


[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/HanadS/cdip_human_phantom/master)

Here is a brief description of each item in the repository:
* **niak_pipeline_t1_average.m** - Octave script averaging T1w images of a subject iteratively with linear registration inside a NIAK container.
* **Csub_t1_AverageAllScansFinal.m** - Octave script that calls niak_pipeline_t1_average.m and provides needed information.
* **Csub_preprocessAllScans.m** - Octave script to run a preprocessing pipeline analysis on CDIP data inside a NIAK container.
* **HNU1PreprocessAllScans.m** - Octave script to run a preprocessing pipeline analysis on HNU1 data inside a NIAK container.
* **connectome_testRetest.m** - Octave script to run a connectome pipeline on preprocessed fMRI data to generate connectivity maps.
* **correlationTestOnly.m** - Octave script to run a connectome pipeline on preprocessed fMRI data to generate connectivity maps.
* **connectome_HNU.m** - Octave script to run a connectome pipeline on preprocessed fMRI data to generate connectivity maps.
* **dashboard** - 

This repository has also been archived on Zenodo: (provide link and DOI)
 
