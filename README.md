# cdip_human_phantom
This repository contains packages, scripts, and notebooks for the following article Multivariate consistency of resting-state fMRI connectivity maps acquired on a single individual over 2.5 years, 13 sites and 3 vendors (to add a link and DOI).

Click the following link to reproduce the analysis on binder:[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/SIMEXP/cdip_human_phantom/master)

Here is a brief description of each item in the repository:

**Matlab Scripts** 

* **niak_pipeline_t1_average.m** - Octave script averaging T1w images of a subject iteratively with linear registration inside a NIAK container.

* **Csub_t1_average.m** - Octave script that calls niak_pipeline_t1_average.m and provides needed information.

* **Csub_preprocess.m** - Octave script to run a preprocessing pipeline analysis on Csub data inside a NIAK container.

* **HNU1_preprocess.m** - Octave script to run a preprocessing pipeline analysis on HNU1 data inside a NIAK container.

* **connectome_Csub.m** - Octave script to run a connectome pipeline on preprocessed Csub data to generate rsfMRI connectivity maps.

* **connectome_HNU1.m** - Octave script to run a connectome pipeline on preprocessed HNU1 data to generate rsfMRI connectivity maps

* **all_correlations_Csub.m** - Octave script to assess consistancy between rsfMRI connectivity maps from the Csub datase

* **all_correlations_HNU1.m** - Octave script to assess consistency between rsfMRI connectivity maps from the HNU1 dataset

**Notebooks**

* **graphs.ipynb** - Jupyter notebook that contains graphs for Csub intra-site, inter-scan consistency over time (2.5 years), Csub vendor consistency, and HNU intra-individual consistency per network, and across all networks

* **stats_repro.ipynb** - Jupyter notebook used to generate the statistics used to assess the consistency of individual rsfMRI measures within/between sites

* **stats_fingerprinting.ipynb** - Jupyter notebook used to (a) generate the statistics used to assess the consistency of connectivity maps within/between subjects, and (b) to assess the ability of a data-driven cluster analysis to recover participant identity from connectivity maps

* **Csub-intra_png** - images of average connectivity maps

* **Csub_correlation.csv** - spreadsheet with correlations for intra-site and inter-scan consistency

* **HNU1_Csub.csv** -spreadsheet with all correlations between HNU1 and Csub datasets

**Dashboard**

* **HNU1_and_Csub_dashboard** - dashboard showing connectivity maps of HNU1 partiipants and Csub for each of the seven canonical rsfMRI networks

* **Csub_longitudinal_consistency_dashboard** - dashboard showing connectivity maps of Csub's multiple retest visits for each of the seven canonical rsfMRI networks

**Dockerfile** - defines the executable environment used for binder container
