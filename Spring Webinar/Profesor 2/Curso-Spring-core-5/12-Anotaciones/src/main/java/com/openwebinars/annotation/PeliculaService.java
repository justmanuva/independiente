package com.openwebinars.annotation;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


public class PeliculaService {
	
	private PeliculaDao peliculaDao;

	// La inyección se tiene que realizar sí o sí (ACTUALMENTE DEPRECADA)
	@Required
	public void setPeliculaDao(PeliculaDao peliculaDao) {
		this.peliculaDao = peliculaDao;
	}

	
	public List<Pelicula> pelisPorGenero(String genero) {
		return peliculaDao
				.findAll()
				.stream()
				.filter(p -> p.getGenero().equalsIgnoreCase(genero))
				.collect(Collectors.toCollection(ArrayList::new));
	}
	
}
